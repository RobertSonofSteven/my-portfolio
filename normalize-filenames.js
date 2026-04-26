const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const IMAGE_EXTENSIONS = new Set([".JPG", ".JPEG", ".PNG", ".WEBP"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const ext = path.extname(entry.name);

    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const lowerName = entry.name.toLowerCase();
    const newPath = path.join(dir, lowerName);

    if (fullPath === newPath) continue;

    if (fs.existsSync(newPath)) {
      console.warn(`Skipped because target already exists: ${newPath}`);
      continue;
    }

    fs.renameSync(fullPath, newPath);
    console.log(`Renamed: ${entry.name} → ${lowerName}`);
  }
}

walk(path.join(ROOT, "projects"));
walk(path.join(ROOT, "cad-thumbnails"));

console.log("Filename normalization complete.");