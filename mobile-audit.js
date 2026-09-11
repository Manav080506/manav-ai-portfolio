const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "http://127.0.0.1:4173";
const OUT = path.join(process.cwd(), "mobile-audit");
const WIDTH = 390;
const HEIGHT = 844;

const pages = [
  { name: "home", url: "/" },

  { name: "project-nexus", url: "/project.html?project=nexus-ai-butler" },
  { name: "project-career-os", url: "/project.html?project=career-os" },
  { name: "project-glitch-over", url: "/project.html?project=glitch-over" },
  { name: "project-astro", url: "/project.html?project=astro-trading-engine" },
  { name: "project-credit-card", url: "/project.html?project=credit-card-intelligence" },
  { name: "project-tradelead", url: "/project.html?project=tradelead-ai" },
  { name: "project-student-support", url: "/project.html?project=student-support-ai" },

  { name: "notes", url: "/notes.html" },

  { name: "note-nexus", url: "/note.html?note=building-nexus" },
  { name: "note-career-os", url: "/note.html?note=career-os" },
  { name: "note-glitchover", url: "/note.html?note=building-glitchover" },
  { name: "note-vibe-coding", url: "/note.html?note=vibe-coding-workflow" },
  { name: "note-systems", url: "/note.html?note=building-systems-incrementally" },

  { name: "resume", url: "/index.html#resume" }
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

(async () => {
  ensureDir(OUT);

  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    viewport: {
      width: WIDTH,
      height: HEIGHT
    },
    deviceScaleFactor: 1,
    isMobile: true,
    hasTouch: true
  });

  const results = [];

  for (const item of pages) {
    const page = await context.newPage();

    const consoleErrors = [];
    const pageErrors = [];
    const failedRequests = [];

    page.on("console", msg => {
      if (msg.type() === "error") {
        consoleErrors.push(msg.text());
      }
    });

    page.on("pageerror", error => {
      pageErrors.push(error.message);
    });

    page.on("requestfailed", request => {
      failedRequests.push({
        url: request.url(),
        failure: request.failure()?.errorText || "unknown"
      });
    });

    const fullUrl = BASE + item.url;

    try {
      await page.goto(fullUrl, {
        waitUntil: "networkidle",
        timeout: 15000
      });

      await page.waitForTimeout(800);

      const audit = await page.evaluate(() => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const visible = el => {
          if (!el) return false;

          const style = getComputedStyle(el);
          const rect = el.getBoundingClientRect();

          return (
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            parseFloat(style.opacity || "1") > 0 &&
            rect.width > 0 &&
            rect.height > 0
          );
        };

        const rectInfo = el => {
          const r = el.getBoundingClientRect();

          return {
            tag: el.tagName.toLowerCase(),
            text: (el.innerText || el.textContent || "")
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 100),
            left: Math.round(r.left),
            right: Math.round(r.right),
            top: Math.round(r.top),
            bottom: Math.round(r.bottom),
            width: Math.round(r.width),
            height: Math.round(r.height),
            visible: visible(el)
          };
        };

        const headings = [...document.querySelectorAll("h1,h2,h3")]
          .filter(visible)
          .map(rectInfo);

        const buttons = [
          ...document.querySelectorAll("button"),
          ...document.querySelectorAll("a.button"),
          ...document.querySelectorAll(".button")
        ]
          .filter(visible)
          .map(rectInfo);

        const floating = [
          ...document.querySelectorAll(
            ".nova-launcher,.github-launcher,.nova-panel,.github-panel"
          )
        ]
          .filter(visible)
          .map(rectInfo);

        const overflowElements = [];

        document.querySelectorAll("*").forEach(el => {
          const r = el.getBoundingClientRect();

          if (
            visible(el) &&
            (r.left < -2 || r.right > viewportWidth + 2)
          ) {
            overflowElements.push(rectInfo(el));
          }
        });

        const horizontalOverflow =
          document.documentElement.scrollWidth > viewportWidth + 2;

        const bodyOverflow =
          document.body.scrollWidth > viewportWidth + 2;

        const links = [...document.querySelectorAll("a")]
          .map(a => ({
            text: (a.innerText || a.textContent || "")
              .replace(/\s+/g, " ")
              .trim()
              .slice(0, 100),
            href: a.getAttribute("href")
          }))
          .filter(x => x.href);

        return {
          title: document.title,
          viewport: {
            width: viewportWidth,
            height: viewportHeight
          },
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          horizontalOverflow,
          bodyOverflow,
          headings,
          buttons,
          floating,
          overflowElements: overflowElements.slice(0, 40),
          links
        };
      });

      const screenshotPath = path.join(
        OUT,
        `${item.name}.png`
      );

      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });

      results.push({
        ...item,
        status: "PASS",
        audit,
        consoleErrors,
        pageErrors,
        failedRequests,
        screenshot: screenshotPath
      });

      console.log(
        `✓ ${item.name.padEnd(28)} ${audit.horizontalOverflow ? "OVERFLOW" : "OK"}`
      );
    } catch (error) {
      results.push({
        ...item,
        status: "FAIL",
        error: error.message,
        consoleErrors,
        pageErrors,
        failedRequests
      });

      console.log(`✗ ${item.name.padEnd(28)} ${error.message}`);
    }

    await page.close();
  }

  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    viewport: {
      width: WIDTH,
      height: HEIGHT
    },
    base: BASE,
    pages: results
  };

  fs.writeFileSync(
    path.join(OUT, "report.json"),
    JSON.stringify(report, null, 2)
  );

  console.log("\n========================================");
  console.log(" MOBILE AUDIT COMPLETE");
  console.log("========================================\n");

  let failed = 0;
  let overflow = 0;
  let jsErrors = 0;

  for (const result of results) {
    if (result.status === "FAIL") {
      failed++;
      continue;
    }

    if (
      result.audit.horizontalOverflow ||
      result.audit.bodyOverflow
    ) {
      overflow++;
    }

    if (
      result.consoleErrors.length ||
      result.pageErrors.length
    ) {
      jsErrors++;
    }
  }

  console.log(`Pages checked : ${results.length}`);
  console.log(`Load failures : ${failed}`);
  console.log(`Overflow      : ${overflow}`);
  console.log(`JS errors     : ${jsErrors}`);
  console.log(`Screenshots   : ${OUT}/`);
  console.log(`Report        : ${OUT}/report.json`);

  console.log("\nOpen screenshots with:");
  console.log("open mobile-audit");

  console.log("\nFull report:");
  console.log(`cat ${OUT}/report.json`);
})();
