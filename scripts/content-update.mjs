import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const requiredRoutes = [
  "/",
  "/codes",
  "/tier-list",
  "/trello",
  "/calculator",
  "/squad-planner",
  "/resource-calculator",
  "/guides",
  "/guides/beginner",
  "/guides/progression",
  "/guides/farming",
  "/wiki",
  "/wiki/items-and-rewards",
  "/wiki/maps-and-systems",
  "/wiki/builds-and-entities",
  "/updates",
];

function pagePathFor(route) {
  return route === "/"
    ? join(root, "src", "app", "page.tsx")
    : join(root, "src", "app", route.slice(1), "page.tsx");
}

function readJson(path) {
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, "utf8"));
}

const statusPath = join(root, "src", "data", "update-status.json");
const previous = readJson(statusPath);
const checkedAt = new Date().toISOString();
const missingRouteFiles = requiredRoutes.filter((route) => !existsSync(pagePathFor(route)));

const payload = {
  ...previous,
  gameSlug: "brookhaven-rp",
  status: missingRouteFiles.length ? "needs-review" : "pass",
  checkedAt,
  checkedDate: checkedAt.slice(0, 10),
  checks: {
    requiredRoutes,
    missingRouteFiles
  },
  notes: [
    "Keep new page updates focused on player questions, current game details, and clear navigation."
  ]
};

mkdirSync(dirname(statusPath), { recursive: true });
writeFileSync(statusPath, `${JSON.stringify(payload, null, 2)}\n`);

if (missingRouteFiles.length) {
  console.error(`Content update baseline failed; missing route files: ${missingRouteFiles.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log(`Content update baseline passed for brookhaven-rp at ${checkedAt}`);
}
