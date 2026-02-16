#!/usr/bin/env node
/**
 * Generate PDF from syndicate agreement Markdown with TrueSight DAO logo header.
 *
 * Logo: /Users/garyjob/Applications/.github/assets/20221219 - Gary logo white background squarish.jpeg
 * (or 20240612_truesight_dao_logo.png for TrueSight DAO branding)
 *
 * Usage:
 *   node scripts/generate_syndicate_pdf.mjs [filename.md]
 *   npm run generate-pdf
 *   npm run generate-pdf:agl14
 *   npm run generate-pdf:agl15
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NOTARIZATIONS_DIR = path.resolve(__dirname, "..");
const LOGO_PATH = path.resolve(
  "/Users/garyjob/Applications/.github/assets",
  "20221219 - Gary logo white background squarish.jpeg"
);
const LOGO_ALT = path.resolve(
  "/Users/garyjob/Applications/.github/assets",
  "20240612_truesight_dao_logo.png"
);

function getLogoDataUrl() {
  for (const p of [LOGO_PATH, LOGO_ALT]) {
    if (fs.existsSync(p)) {
      const buf = fs.readFileSync(p);
      const ext = path.extname(p).toLowerCase();
      const mime = ext === ".png" ? "image/png" : "image/jpeg";
      return `data:${mime};base64,${buf.toString("base64")}`;
    }
  }
  return null;
}

function buildHtml(mdContent, logoDataUrl) {
  const htmlBody = marked.parse(mdContent);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Export Trade Financing Syndicate Agreement</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #222;
      max-width: 800px;
      margin: 0 auto;
      padding: 24px 32px 48px;
    }
    .logo-header {
      text-align: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #ddd;
    }
    .logo-header img {
      max-height: 100px;
      max-width: 320px;
      object-fit: contain;
    }
    h1, h2 { color: #2C2416; }
    table { border-collapse: collapse; width: 100%; margin: 12px 0; }
    th, td { border: 1px solid #ccc; padding: 8px 12px; text-align: left; }
    th { background: #f5f5f5; }
    hr { border: none; border-top: 1px solid #ddd; margin: 24px 0; }
    @media print {
      body { padding: 16px 24px; }
      .logo-header { margin-bottom: 16px; }
    }
  </style>
</head>
<body>
  ${
    logoDataUrl
      ? `<div class="logo-header"><img src="${logoDataUrl}" alt="TrueSight DAO" /></div>`
      : "<!-- No logo -->"
  }
  <div class="content">
${htmlBody}
  </div>
</body>
</html>`;
}

async function generatePdf(mdPath) {
  const basename = path.basename(mdPath, ".md");
  const pdfPath = path.join(NOTARIZATIONS_DIR, `${basename}.pdf`);
  const mdContent = fs.readFileSync(mdPath, "utf8");
  const logoDataUrl = getLogoDataUrl();

  if (!logoDataUrl) {
    console.warn(
      "Logo not found at expected path. Generating PDF without header logo."
    );
    console.warn("Expected:", LOGO_PATH, "or", LOGO_ALT);
  }

  const html = buildHtml(mdContent, logoDataUrl);
  const chromePaths = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ];
  const executablePath = chromePaths.find((p) => fs.existsSync(p)) || undefined;
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath,
    args: executablePath ? ["--no-sandbox", "--disable-setuid-sandbox"] : [],
  });
  const page = await browser.newPage();
  await page.setContent(html, {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: pdfPath,
    format: "A4",
    margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" },
    printBackground: true,
  });
  await browser.close();

  console.log("Generated:", pdfPath);
  return pdfPath;
}

async function main() {
  const args = process.argv.slice(2);
  const files = args.length
    ? args.map((f) => path.resolve(NOTARIZATIONS_DIR, f))
    : [
        path.join(NOTARIZATIONS_DIR, "20260216_AGL14_export_trade_financing_syndicate_agreement.md"),
        path.join(NOTARIZATIONS_DIR, "20260216_AGL15_export_trade_financing_syndicate_agreement.md"),
      ];

  for (const f of files) {
    if (!fs.existsSync(f)) {
      console.error("File not found:", f);
      process.exit(1);
    }
  }

  for (const f of files) {
    await generatePdf(f);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
