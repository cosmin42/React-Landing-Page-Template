const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");
const outputPath = path.join(rootDir, "src", "data", "installerInfo.js");
const installerPattern = /^PhotoBook-(\d+(?:\.\d+)*)\.dmg$/;

function formatFileSize(bytes) {
  const megabytes = bytes / 1024 / 1024;
  return `${megabytes.toFixed(1)} MB`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function compareVersions(leftVersion, rightVersion) {
  const leftParts = leftVersion.split(".").map(Number);
  const rightParts = rightVersion.split(".").map(Number);
  const partCount = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < partCount; index += 1) {
    const leftPart = leftParts[index] || 0;
    const rightPart = rightParts[index] || 0;

    if (leftPart !== rightPart) {
      return leftPart - rightPart;
    }
  }

  return 0;
}

const installerFiles = fs
  .readdirSync(publicDir)
  .map((fileName) => {
    const match = fileName.match(installerPattern);

    if (!match) {
      return null;
    }

    const filePath = path.join(publicDir, fileName);
    const fileStats = fs.statSync(filePath);
    const createdAt = fileStats.birthtime || fileStats.mtime;

    return {
      fileName,
      version: match[1],
      sizeBytes: fileStats.size,
      sizeLabel: formatFileSize(fileStats.size),
      createdAt: createdAt.toISOString(),
      createdLabel: formatDate(createdAt),
    };
  })
  .filter(Boolean)
  .sort((left, right) => compareVersions(right.version, left.version));

if (installerFiles.length === 0) {
  throw new Error(
    "No PhotoBook versioned DMG found in public/. Expected a file like PhotoBook-1.3.4.dmg."
  );
}

const installerInfo = installerFiles[0];
const output = `export const installerInfo = ${JSON.stringify(installerInfo, null, 2)};\n`;

fs.writeFileSync(outputPath, output);
console.log(`Generated src/data/installerInfo.js from public/${installerInfo.fileName}`);