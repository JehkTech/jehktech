import { spawnSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const HTML_FILE = process.env.PORTFOLIO_HTML || "D:/Extra/Other/JehkTech/index.html";
const OUTPUTS = [
  process.env.PORTFOLIO_PDF_OUT || "D:/Extra/Other/JehkTech/JehKTech-Portfolio.pdf",
  join(ROOT, "public", "JehKTech-Portfolio.pdf"),
];

function findBrowser() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const win = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  ];
  const mac = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];
  const linux = [
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/usr/bin/microsoft-edge",
  ];
  const candidates =
    process.platform === "win32" ? win : process.platform === "darwin" ? mac : linux;
  for (const path of candidates) if (existsSync(path)) return path;
  return null;
}

const browser = findBrowser();
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH to a browser executable.");
  process.exit(1);
}
if (!existsSync(HTML_FILE)) {
  console.error(`Portfolio HTML not found: ${HTML_FILE}`);
  process.exit(1);
}

const tmpDir = mkdtempSync(join(tmpdir(), "jehktech-pdf-"));
const tmpPdf = join(tmpDir, "portfolio.pdf");
const url = `${pathToFileURL(HTML_FILE).href}?pdf=1`;

console.log(`Browser: ${browser}`);
console.log(`Source:  ${url}`);

const result = spawnSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${tmpPdf}`,
    url,
  ],
  { stdio: "inherit", windowsHide: true }
);

if (result.status !== 0 || !existsSync(tmpPdf)) {
  console.error("PDF generation failed.");
  rmSync(tmpDir, { recursive: true, force: true });
  process.exit(result.status || 1);
}

for (const out of OUTPUTS) {
  mkdirSync(dirname(out), { recursive: true });
  copyFileSync(tmpPdf, out);
  console.log(`Wrote:    ${out}`);
}

rmSync(tmpDir, { recursive: true, force: true });
console.log("Done.");
