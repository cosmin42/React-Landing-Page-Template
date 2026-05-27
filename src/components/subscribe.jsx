import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./subscribe.css";

const subscribeEndpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT || "/api/subscribe";
const turnstileSiteKey = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const defaultCopy = {
  kicker: "Updates",
  title: "Stay close to Photo Book Noir",
  lead: "Get concise product updates, beta notes, and release news.",
  bullets: [],
  emailLabel: "Email address",
  emailPlaceholder: "you@example.com",
  consentLabel: "I agree to receive occasional Photo Book Noir updates by email.",
  privacyPrefix: "Your email is used only for Photo Book Noir updates.",
  privacyLinkLabel: "Privacy Policy",
  buttonLabel: "Subscribe",
  submittingLabel: "Subscribing...",
  successMessage: "Thanks, you are on the list.",
  errorMessage: "Subscription failed. Please try again later.",
  validationEmail: "Enter a valid email address.",
  validationConsent: "Confirm that you want to receive updates.",
  captchaMissing: "Complete the security check before subscribing.",
};

export const Subscribe = ({ data = {}, language = "en", embedded = false }) => {
  const copy = { ...defaultCopy, ...data };
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!turnstileSiteKey || !turnstileRef.current) {
      return undefined;
    }

    let cancelled = false;

    const renderTurnstile = () => {
      if (cancelled || !window.turnstile || !turnstileRef.current || widgetIdRef.current !== null) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: turnstileSiteKey,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const existingScript = document.getElementById("turnstile-script");
      const script = existingScript || document.createElement("script");

      if (!existingScript) {
        script.id = "turnstile-script";
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      script.addEventListener("load", renderTurnstile);
    }

    return () => {
      cancelled = true;

      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (error) {
          // Turnstile can already be removed during React development remounts.
        }
      }

      widgetIdRef.current = null;
    };
  }, []);

  const resetTurnstile = () => {
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current);
    }

    setTurnstileToken("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage(copy.validationEmail);
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage(copy.validationConsent);
      return;
    }

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setMessage(copy.captchaMissing);
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch(subscribeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          consent,
          company,
          language,
          source: "homepage",
          turnstileToken: turnstileToken || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Subscription request failed");
      }

      setEmail("");
      setConsent(false);
      setCompany("");
      setStatus("success");
      setMessage(copy.successMessage);
      resetTurnstile();
    } catch (error) {
      setStatus("error");
      setMessage(copy.errorMessage);
      resetTurnstile();
    }
  };

  const isSubmitting = status === "submitting";
  const statusClass = status === "success" ? " subscribe-status--success" : status === "error" ? " subscribe-status--error" : "";
  const sectionClass = `subscribe-section${embedded ? " subscribe-section--embedded" : ""}`;

  const subscribeContent = (
    <div className="row subscribe-layout">
      <div className="col-xs-12 col-md-5">
        <div className="subscribe-copy">
          {copy.kicker ? <p className="subscribe-kicker">{copy.kicker}</p> : null}
          <h2 id="subscribe-title">{copy.title}</h2>
          {copy.lead ? <p className="subscribe-lead">{copy.lead}</p> : null}
          {copy.bullets?.length ? (
            <ul className="subscribe-benefits">
              {copy.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="col-xs-12 col-md-7">
        <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
          <div className="subscribe-input-row">
            <label className="sr-only" htmlFor="subscribe-email">
              {copy.emailLabel}
            </label>
            <input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              inputMode="email"
              maxLength="254"
              placeholder={copy.emailPlaceholder}
              disabled={isSubmitting}
              required
            />
            <button type="submit" className="btn btn-custom subscribe-submit" disabled={isSubmitting}>
              {isSubmitting ? copy.submittingLabel : copy.buttonLabel}
            </button>
          </div>

          <div className="subscribe-honeypot" hidden aria-hidden="true">
            <label htmlFor="subscribe-company">Company</label>
            <input
              id="subscribe-company"
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <label className="subscribe-consent">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              disabled={isSubmitting}
              required
            />
            <span>{copy.consentLabel}</span>
          </label>

          {turnstileSiteKey ? <div className="subscribe-turnstile" ref={turnstileRef} /> : null}

          <p className="subscribe-privacy">
            {copy.privacyPrefix} <Link to="/privacy">{copy.privacyLinkLabel}</Link>
          </p>

          <p className={`subscribe-status${statusClass}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </div>
  );

  return (
    <section id="subscribe" className={sectionClass} aria-labelledby="subscribe-title">
      {embedded ? subscribeContent : <div className="container">{subscribeContent}</div>}
    </section>
  );
};

export default Subscribe;