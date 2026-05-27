const crypto = require("crypto");
const { TableClient } = require("@azure/data-tables");

const DEFAULT_ALLOWED_ORIGINS = [
  "https://photobook-noir.com",
  "https://www.photobook-noir.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:4280",
];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const MAX_BODY_BYTES = 4096;
const MAX_EMAIL_LENGTH = 254;
const SUBSCRIBER_TABLE = process.env.SUBSCRIBE_TABLE_NAME || "NewsletterSubscribers";
const RATE_LIMIT_TABLE = process.env.SUBSCRIBE_RATE_LIMIT_TABLE_NAME || "NewsletterRateLimits";
const MAX_IP_ATTEMPTS_PER_HOUR = Number(process.env.SUBSCRIBE_MAX_IP_ATTEMPTS_PER_HOUR || 12);
const MAX_EMAIL_ATTEMPTS_PER_DAY = Number(process.env.SUBSCRIBE_MAX_EMAIL_ATTEMPTS_PER_DAY || 3);

let subscriberClient;
let rateLimitClient;
let tablesReadyPromise;

class PublicRequestError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.publicMessage = message;
  }
}

module.exports = async function subscribe(context, req) {
  const origin = getHeader(req, "origin");
  const allowedOrigin = getAllowedOrigin(origin);
  const headers = getResponseHeaders(allowedOrigin);

  if (req.method === "OPTIONS") {
    context.res = {
      status: allowedOrigin ? 204 : 403,
      headers,
    };
    return;
  }

  try {
    if (req.method !== "POST") {
      throw new PublicRequestError(405, "Method not allowed.");
    }

    if (!isAllowedSiteRequest(req, origin)) {
      throw new PublicRequestError(403, "Subscription requests are not allowed from this origin.");
    }

    const rawBody = getRawBody(req);
    if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
      throw new PublicRequestError(413, "Request body is too large.");
    }

    const body = getBody(req, rawBody);
    if (body.company || body.website || body.url) {
      context.res = successResponse(headers);
      return;
    }

    const email = normalizeEmail(body.email);
    if (!isValidEmail(email)) {
      throw new PublicRequestError(400, "Enter a valid email address.");
    }

    if (body.consent !== true) {
      throw new PublicRequestError(400, "Consent is required.");
    }

    if (process.env.SUBSCRIBE_TURNSTILE_SECRET) {
      const token = String(body.turnstileToken || "");
      const verified = await verifyTurnstile(token, getClientIp(req));

      if (!verified) {
        throw new PublicRequestError(403, "Security check failed.");
      }
    }

    await ensureTablesReady();

    const now = new Date();
    const emailHash = hashValue(email);
    const ipHash = hashValue(getClientIp(req) || "unknown");
    const userAgentHash = hashValue(getHeader(req, "user-agent") || "unknown");

    await enforceRateLimit(rateLimitClient, "ip", ipHash, getHourWindow(now), MAX_IP_ATTEMPTS_PER_HOUR);
    await enforceRateLimit(rateLimitClient, "email", emailHash, getDayWindow(now), MAX_EMAIL_ATTEMPTS_PER_DAY);

    await subscriberClient.upsertEntity(
      {
        partitionKey: "newsletter",
        rowKey: emailHash,
        email,
        emailHash,
        status: "subscribed",
        source: sanitizeText(body.source, 40) || "homepage",
        language: sanitizeText(body.language, 8) || "en",
        consent: true,
        consentVersion: "2026-05-27",
        consentAt: now.toISOString(),
        ipHash,
        userAgentHash,
        updatedAt: now.toISOString(),
      },
      "Merge"
    );

    context.res = successResponse(headers);
  } catch (error) {
    const status = error instanceof PublicRequestError ? error.status : 500;
    const publicMessage = error instanceof PublicRequestError ? error.publicMessage : "Subscription is unavailable. Please try again later.";

    if (!(error instanceof PublicRequestError)) {
      context.log.error("Subscribe API failed", error);
    }

    context.res = {
      status,
      headers,
      body: {
        ok: false,
        message: publicMessage,
      },
    };
  }
};

function getResponseHeaders(allowedOrigin) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "no-referrer",
    Vary: "Origin",
  };

  if (allowedOrigin) {
    headers["Access-Control-Allow-Origin"] = allowedOrigin;
    headers["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type";
    headers["Access-Control-Max-Age"] = "600";
  }

  return headers;
}

function successResponse(headers) {
  return {
    status: 200,
    headers,
    body: {
      ok: true,
      message: "Subscribed.",
    },
  };
}

function getHeader(req, headerName) {
  const target = headerName.toLowerCase();
  const key = Object.keys(req.headers || {}).find((name) => name.toLowerCase() === target);
  return key ? req.headers[key] : "";
}

function getAllowedOrigins() {
  const configuredOrigins = (process.env.SUBSCRIBE_ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim().replace(/\/+$/, ""))
    .filter(Boolean);

  return configuredOrigins.length ? configuredOrigins : DEFAULT_ALLOWED_ORIGINS;
}

function getAllowedOrigin(origin) {
  if (!origin) {
    return "";
  }

  return getAllowedOrigins().includes(origin) ? origin : "";
}

function isAllowedSiteRequest(req, origin) {
  if (origin) {
    return Boolean(getAllowedOrigin(origin));
  }

  const referer = getHeader(req, "referer");
  if (referer) {
    return getAllowedOrigins().some((allowedOrigin) => referer === allowedOrigin || referer.startsWith(`${allowedOrigin}/`));
  }

  return process.env.SUBSCRIBE_ALLOW_MISSING_ORIGIN === "true";
}

function getRawBody(req) {
  if (typeof req.rawBody === "string") {
    return req.rawBody;
  }

  if (Buffer.isBuffer(req.rawBody)) {
    return req.rawBody.toString("utf8");
  }

  return JSON.stringify(req.body || {});
}

function getBody(req, rawBody) {
  if (req.body && typeof req.body === "object" && !Buffer.isBuffer(req.body)) {
    return req.body;
  }

  try {
    return JSON.parse(rawBody || "{}");
  } catch (error) {
    throw new PublicRequestError(400, "Request body must be valid JSON.");
  }
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return email.length > 3 && email.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(email);
}

function getClientIp(req) {
  const forwardedFor = getHeader(req, "x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return getHeader(req, "x-client-ip") || getHeader(req, "client-ip") || "unknown";
}

function getHashSecret() {
  return process.env.SUBSCRIBE_HASH_SECRET || process.env.SUBSCRIBE_STORAGE_CONNECTION_STRING || process.env.AzureWebJobsStorage || "photobook-noir-subscribe";
}

function hashValue(value) {
  return crypto.createHmac("sha256", getHashSecret()).update(String(value)).digest("hex");
}

function sanitizeText(value, maxLength) {
  return String(value || "")
    .replace(/[^a-z0-9._ -]/gi, "")
    .trim()
    .slice(0, maxLength);
}

function getStorageConnectionString() {
  const connectionString = process.env.SUBSCRIBE_STORAGE_CONNECTION_STRING || process.env.AzureWebJobsStorage;

  if (!connectionString) {
    throw new Error("Missing SUBSCRIBE_STORAGE_CONNECTION_STRING or AzureWebJobsStorage setting.");
  }

  return connectionString;
}

function getTableClient(tableName) {
  return TableClient.fromConnectionString(getStorageConnectionString(), tableName);
}

async function ensureTablesReady() {
  if (!subscriberClient) {
    subscriberClient = getTableClient(SUBSCRIBER_TABLE);
  }

  if (!rateLimitClient) {
    rateLimitClient = getTableClient(RATE_LIMIT_TABLE);
  }

  if (!tablesReadyPromise) {
    tablesReadyPromise = Promise.all([createTableIfNeeded(subscriberClient), createTableIfNeeded(rateLimitClient)]);
  }

  return tablesReadyPromise;
}

async function createTableIfNeeded(client) {
  try {
    await client.createTable();
  } catch (error) {
    if (!isConflict(error)) {
      throw error;
    }
  }
}

function isConflict(error) {
  return error.statusCode === 409 || error.code === "TableAlreadyExists" || String(error.message || "").includes("TableAlreadyExists");
}

function isNotFound(error) {
  return error.statusCode === 404 || error.code === "ResourceNotFound";
}

function getHourWindow(date) {
  return date.toISOString().slice(0, 13);
}

function getDayWindow(date) {
  return date.toISOString().slice(0, 10);
}

async function enforceRateLimit(client, partitionKey, hash, windowKey, maxAttempts) {
  if (!Number.isFinite(maxAttempts) || maxAttempts < 1) {
    return;
  }

  const rowKey = `${windowKey}-${hash}`;
  const now = new Date().toISOString();

  try {
    const entity = await client.getEntity(partitionKey, rowKey);
    const count = Number(entity.count || 0);

    if (count >= maxAttempts) {
      throw new PublicRequestError(429, "Too many attempts. Please try again later.");
    }

    await client.updateEntity(
      {
        partitionKey,
        rowKey,
        count: count + 1,
        updatedAt: now,
      },
      "Merge"
    );
  } catch (error) {
    if (error instanceof PublicRequestError) {
      throw error;
    }

    if (!isNotFound(error)) {
      throw error;
    }

    try {
      await client.createEntity({
        partitionKey,
        rowKey,
        count: 1,
        createdAt: now,
        updatedAt: now,
      });
    } catch (createError) {
      if (!isConflict(createError)) {
        throw createError;
      }
    }
  }
}

async function verifyTurnstile(token, ipAddress) {
  if (!token) {
    return false;
  }

  const formData = new URLSearchParams();
  formData.set("secret", process.env.SUBSCRIBE_TURNSTILE_SECRET);
  formData.set("response", token);

  if (ipAddress && ipAddress !== "unknown") {
    formData.set("remoteip", ipAddress);
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return false;
    }

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    return false;
  }
}