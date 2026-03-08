const fs = require("node:fs");
const path = require("node:path");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const PROJECTS_DIR = path.join(ROOT, "projects");
const DATA_DIR = path.join(DIST, "data");

const ROOT_FILES_TO_COPY = [
  "index.html",
  "styles.css",
  "script.js",
  "project-page.css"
];

const CATEGORY_LABELS = {
  featured: "Featured",
  work: "Work",
  personal: "Personal",
  fitness: "Fitness Tech",
  car: "Car",
  "3d-printing": "3D Printing"
};

const TONE_DEFAULTS = {
  work: ["Work", "Engineering", "Design"],
  personal: ["Personal", "Build", "Prototype"],
  fitness: ["Fitness", "Sensors", "Data"],
  car: ["Automotive", "Integration", "Troubleshooting"],
  fabrication: ["3D Printing", "Fabrication", "Prototype"]
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function cleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  ensureDir(dirPath);
}

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    ensureDir(dest);
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
    return;
  }

  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function ensureArray(value) {
  return Array.isArray(value) ? value.filter(Boolean) : [];
}

function toPublicProjectPath(slug, fileName) {
  if (!fileName) return "";
  return `/projects/${slug}/${fileName}`;
}

function inferTone(categories, fallbackTone) {
  if (fallbackTone) return fallbackTone;
  if (categories.includes("work")) return "work";
  if (categories.includes("fitness")) return "fitness";
  if (categories.includes("car")) return "car";
  if (categories.includes("3d-printing")) return "fabrication";
  return "personal";
}

function normalizeProject(raw, folderName) {
  const slug = raw.slug || folderName;
  const categories = ensureArray(raw.categories).length
    ? ensureArray(raw.categories)
    : [raw.tone || "personal"];

  const tone = inferTone(categories, raw.tone);
  const primaryCategory =
    categories.find((cat) => cat !== "featured") || categories[0] || "personal";

  const keywords = ensureArray(raw.keywords);
  const highlights = ensureArray(raw.highlights);
  const meta =
    ensureArray(raw.meta).length > 0
      ? ensureArray(raw.meta)
      : (TONE_DEFAULTS[tone] || ["Project"]).slice(0, 3);

  return {
    slug,
    title: raw.title || slug,
    heroLabel: raw.heroLabel || "Project",
    categories,
    categoryLabel: CATEGORY_LABELS[primaryCategory] || primaryCategory,
    keywords,
    tone,
    featured: Boolean(raw.featured || categories.includes("featured")),
    spotlight: Boolean(raw.spotlight),
    sortOrder: Number.isFinite(raw.sortOrder) ? raw.sortOrder : 999,
    summary: raw.summary || "",
    description: raw.description || "",
    overview: raw.overview || raw.description || "",
    highlights: highlights.length ? highlights : keywords.slice(0, 4),
    meta,
    thumbnail: toPublicProjectPath(slug, raw.thumbnail || "thumb.jpg"),
    heroImage: toPublicProjectPath(slug, raw.heroImage || "hero.jpg"),
    gallery: ensureArray(raw.gallery).map((file) => toPublicProjectPath(slug, file)),
    videos: ensureArray(raw.videos).map((file) => toPublicProjectPath(slug, file)),
    models: ensureArray(raw.models).map((file) => toPublicProjectPath(slug, file)),
    links: raw.links || {},
    pageUrl: `/projects/${slug}/`
  };
}

function sortProjects(a, b) {
  if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
  return a.title.localeCompare(b.title);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderChips(items) {
  return items
    .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
    .join("");
}

function renderGallery(project) {
  if (!project.gallery.length) return "";
  return `
    <section class="project-section">
      <h2>Gallery</h2>
      <div class="media-grid">
        ${project.gallery
          .map(
            (src, index) => `
              <figure class="media-card">
                <img src="${src}" alt="${escapeHtml(project.title)} gallery image ${index + 1}" loading="lazy" />
              </figure>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderVideos(project) {
  if (!project.videos.length) return "";
  return `
    <section class="project-section">
      <h2>Videos</h2>
      <div class="media-grid">
        ${project.videos
          .map(
            (src) => `
              <div class="media-card">
                <video controls preload="metadata" playsinline>
                  <source src="${src}" />
                  Your browser does not support the video tag.
                </video>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderModels(project) {
  if (!project.models.length) return "";

  return `
    <section class="project-section">
      <h2>3D Models</h2>
      <div class="model-grid">
        ${project.models
          .map(
            (src) => `
              <div class="model-card">
                <model-viewer
                  src="${src}"
                  poster="${project.heroImage}"
                  camera-controls
                  auto-rotate
                  tone-mapping="neutral"
                  shadow-intensity="1"
                ></model-viewer>
                <a class="text-link" href="${src}" target="_blank" rel="noreferrer">Open model file</a>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderLinks(project) {
  const links = [];
  if (project.links?.github) {
    links.push(
      `<a class="button secondary" href="${escapeHtml(project.links.github)}" target="_blank" rel="noreferrer">GitHub</a>`
    );
  }
  if (project.links?.external) {
    links.push(
      `<a class="button secondary" href="${escapeHtml(project.links.external)}" target="_blank" rel="noreferrer">External Link</a>`
    );
  }
  return links.join("");
}

function renderProjectPage(project) {
  const usesModelViewer = project.models.length > 0;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(project.title)} | Robert Stevenson</title>
  <link rel="stylesheet" href="/project-page.css" />
  ${usesModelViewer ? '<script type="module" src="https://cdn.jsdelivr.net/npm/@google/model-viewer/dist/model-viewer.min.js"></script>' : ""}
</head>
<body>
  <header class="project-site-header">
    <div class="container project-site-header-inner">
      <a class="back-link" href="/">← Back to Portfolio</a>
      <span class="site-name">Robert Stevenson</span>
    </div>
  </header>

  <main>
    <section class="project-hero">
      <div class="container project-hero-grid">
        <div class="project-hero-copy">
          <span class="eyebrow">${escapeHtml(project.heroLabel)}</span>
          <h1>${escapeHtml(project.title)}</h1>
          <p class="project-description">${escapeHtml(project.description)}</p>
          <div class="chip-row">
            ${renderChips(project.meta)}
          </div>
          <div class="hero-actions">
            <a class="button primary" href="/">Back Home</a>
            ${renderLinks(project)}
          </div>
        </div>

        <div class="project-hero-media">
          <img src="${project.heroImage}" alt="${escapeHtml(project.title)} hero image" />
        </div>
      </div>
    </section>

    <section class="container project-body">
      <div class="project-main">
        <section class="project-section">
          <h2>Overview</h2>
          <p>${escapeHtml(project.overview)}</p>
        </section>

        ${renderGallery(project)}
        ${renderVideos(project)}
        ${renderModels(project)}
      </div>

      <aside class="project-sidebar">
        <div class="sidebar-card">
          <h3>Project Details</h3>
          <div class="detail-row">
            <span class="detail-label">Category</span>
            <span class="detail-value">${escapeHtml(project.categoryLabel)}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label">Slug</span>
            <span class="detail-value">${escapeHtml(project.slug)}</span>
          </div>
        </div>

        <div class="sidebar-card">
          <h3>Highlights</h3>
          <ul class="sidebar-list">
            ${project.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>

        <div class="sidebar-card">
          <h3>Keywords</h3>
          <div class="chip-row">
            ${renderChips(project.keywords)}
          </div>
        </div>
      </aside>
    </section>
  </main>
</body>
</html>`;
}

function main() {
  cleanDir(DIST);
  ensureDir(DATA_DIR);

  for (const fileName of ROOT_FILES_TO_COPY) {
    const src = path.join(ROOT, fileName);
    const dest = path.join(DIST, fileName);
    if (fs.existsSync(src)) {
      copyRecursive(src, dest);
    }
  }

  copyRecursive(PROJECTS_DIR, path.join(DIST, "projects"));

  const projectFolders = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory());

  const projects = projectFolders
    .map((entry) => {
      const jsonPath = path.join(PROJECTS_DIR, entry.name, "project.json");
      if (!fs.existsSync(jsonPath)) return null;
      const raw = readJson(jsonPath);
      return normalizeProject(raw, entry.name);
    })
    .filter(Boolean)
    .sort(sortProjects);

  fs.writeFileSync(
    path.join(DATA_DIR, "projects.generated.json"),
    JSON.stringify(projects, null, 2),
    "utf8"
  );

  for (const project of projects) {
    const outputPath = path.join(DIST, "projects", project.slug, "index.html");
    ensureDir(path.dirname(outputPath));
    fs.writeFileSync(outputPath, renderProjectPage(project), "utf8");
  }

  console.log(`Built ${projects.length} projects into ${DIST}`);
}

main();
