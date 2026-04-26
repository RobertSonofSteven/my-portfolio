const CATEGORY_CONFIG = [
  { id: "featured", title: "Featured" },
  { id: "work", title: "Work" },
  { id: "personal", title: "Personal" },
  { id: "mechanical-design", title: "Mechanical Design" },
  { id: "electronics-embedded", title: "Electronics & Embedded" }
];

let rowsArea;
let spotlightPanel;
let spotlightIndicators;
let modalBackdrop;
let closeModal;
let modalTitle;
let modalCategory;
let modalDescription;
let modalOverview;
let modalHighlights;
let modalMeta;
let modalMedia;
let modalProjectLink;
let cadArchiveSection;
let cadArchiveCollage;

let spotlightProjects = [];
let spotlightIndex = 0;
let spotlightTimer = null;

function getToneGlow(tone) {
  switch (tone) {
    case "personal":
      return "rgba(88, 166, 255, 0.26)";
    case "fitness":
      return "rgba(64, 156, 255, 0.26)";
    case "car":
      return "rgba(75, 139, 255, 0.24)";
    case "fabrication":
      return "rgba(102, 153, 255, 0.24)";
    default:
      return "rgba(30, 111, 255, 0.24)";
  }
}

function getToneBase(tone) {
  switch (tone) {
    case "personal":
      return "#14243d";
    case "fitness":
      return "#10233c";
    case "car":
      return "#13243a";
    case "fabrication":
      return "#182544";
    default:
      return "#10203a";
  }
}

function getTileBackground(imageUrl) {
  return `
    linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.18)),
    url("${imageUrl}") center/cover no-repeat
  `;
}

function getHeroVisualBackground(imageUrl) {
  return `
    linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.22)),
    url("${imageUrl}") center/cover no-repeat
  `;
}

function ensureModalProjectLink() {
  const wrap = document.querySelector(".modal-title-wrap");
  let actions = document.getElementById("modalActions");

  if (!actions) {
    actions = document.createElement("div");
    actions.className = "spotlight-actions";
    actions.id = "modalActions";
    actions.innerHTML = `<a class="button primary" id="modalProjectLink" href="#">View Project Page</a>`;
    wrap.appendChild(actions);
  }

  modalProjectLink = document.getElementById("modalProjectLink");
}

function sortProjects(a, b) {
  if ((a.sortOrder ?? 999) !== (b.sortOrder ?? 999)) {
    return (a.sortOrder ?? 999) - (b.sortOrder ?? 999);
  }
  return a.title.localeCompare(b.title);
}

function getStableRowSortValue(rowId, project, index) {
  const seed = `${rowId}:${project.slug || project.title}:${index}`;
  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function sortProjectsForRow(projects, rowId) {
  if (rowId === "featured") {
    return [...projects].sort(sortProjects);
  }

  return [...projects]
    .map((project, index) => ({
      project,
      originalIndex: index,
      score: getStableRowSortValue(rowId, project, index)
    }))
    .sort((a, b) => a.score - b.score || a.originalIndex - b.originalIndex)
    .map((item) => item.project);
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.categoryLabel || "Project";
  modalDescription.textContent = project.description;
  modalOverview.textContent = project.overview;

  modalHighlights.innerHTML = "";
  (project.highlights?.length ? project.highlights : (project.keywords || []).slice(0, 4)).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    modalHighlights.appendChild(li);
  });

  modalMeta.innerHTML = "";
  (project.meta || []).forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "meta-chip";
    chip.textContent = item;
    modalMeta.appendChild(chip);
  });

  if (modalProjectLink) {
    modalProjectLink.href = project.pageUrl;
  }

const modalImage = project.bannerImage || project.heroImage || project.thumbnail;

  modalMedia.style.background = `
  linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0.3)),
  radial-gradient(circle at 18% 18%, ${getToneGlow(project.tone)}, transparent 22%),
  radial-gradient(circle at 82% 72%, rgba(255,255,255,0.07), transparent 20%),
  url("${modalImage}") center/cover no-repeat
`;

  modalBackdrop.classList.add("active");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function hideModal() {
  modalBackdrop.classList.remove("active");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function buildSpotlight(projects) {
  spotlightPanel.innerHTML = "";
  spotlightIndicators.innerHTML = "";

  projects.forEach((project, index) => {
    const slide = document.createElement("article");
    slide.className = `spotlight-slide${index === 0 ? " active" : ""}`;
    slide.dataset.index = String(index);
    slide.style.setProperty("--spotlight-glow", getToneGlow(project.tone));
    slide.style.setProperty("--spotlight-base", getToneBase(project.tone));
    slide.innerHTML = `
      <div class="spotlight-copy">
        <span class="eyebrow">${project.heroLabel || "Featured Project"}</span>
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <div class="spotlight-actions">
          <a class="button primary" href="${project.pageUrl}">View Project Page</a>
          <button class="button secondary" type="button">Quick View</button>
        </div>
        <div class="spotlight-meta">
          ${(project.meta || []).map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="spotlight-visual" aria-hidden="true"></div>
    `;

    const visual = slide.querySelector(".spotlight-visual");
    if (project.heroImage) {
      visual.style.background = getHeroVisualBackground(project.heroImage);
    }

    const quickViewButton = slide.querySelector(".button.secondary");
    quickViewButton.addEventListener("click", () => openModal(project));
    spotlightPanel.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = `spotlight-dot${index === 0 ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Show spotlight project ${index + 1}`);
    dot.addEventListener("click", () => {
      showSpotlight(index);
      restartSpotlightTimer();
    });
    spotlightIndicators.appendChild(dot);
  });

  spotlightPanel.addEventListener("mouseenter", () => {
    window.clearInterval(spotlightTimer);
  });

  spotlightPanel.addEventListener("mouseleave", () => {
    startSpotlightTimer();
  });
}

function showSpotlight(index) {
  const slides = spotlightPanel.querySelectorAll(".spotlight-slide");
  const dots = spotlightIndicators.querySelectorAll(".spotlight-dot");

  if (!slides.length) return;

  spotlightIndex = index;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function startSpotlightTimer() {
  if (!spotlightProjects.length) return;
  window.clearInterval(spotlightTimer);
  spotlightTimer = window.setInterval(() => {
    const nextIndex = (spotlightIndex + 1) % spotlightProjects.length;
    showSpotlight(nextIndex);
  }, 10000);
}

function restartSpotlightTimer() {
  startSpotlightTimer();
}

function createCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.tone = project.tone || "work";
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", project.title);
  card.innerHTML = `
    <div class="project-visual"></div>
    <div class="project-overlay">
      <p class="project-summary">${project.summary}</p>
    </div>
  `;

  const visual = card.querySelector(".project-visual");
  if (project.thumbnail) {
    visual.style.background = getTileBackground(project.thumbnail);
  }

  const open = () => openModal(project);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });

  return card;
}

function createRow(rowConfig, items) {
  if (!items.length) return;

  const section = document.createElement("section");
  section.className = "row-section";
  section.id = rowConfig.id;

  const header = document.createElement("div");
  header.className = "row-header";
  header.innerHTML = `
    <div class="row-header-left">
      <h2>${rowConfig.title}</h2>
    </div>
    <div class="row-controls">
      <button class="row-control" type="button" aria-label="Scroll ${rowConfig.title} left">‹</button>
      <button class="row-control" type="button" aria-label="Scroll ${rowConfig.title} right">›</button>
    </div>
  `;

  const shell = document.createElement("div");
  shell.className = "row-shell";

  const track = document.createElement("div");
  track.className = "project-row";

  items.forEach((project) => {
    track.appendChild(createCard(project));
  });

  shell.appendChild(track);
  section.appendChild(header);
  section.appendChild(shell);
  rowsArea.appendChild(section);

  const [leftButton, rightButton] = header.querySelectorAll(".row-control");
  const getTileWidth = () => parseInt(getComputedStyle(document.documentElement).getPropertyValue("--tile-width"), 10) || 320;

  leftButton.addEventListener("click", () => {
    track.scrollBy({ left: -(3 * (getTileWidth() + 16)), behavior: "smooth" });
  });

  rightButton.addEventListener("click", () => {
    track.scrollBy({ left: 3 * (getTileWidth() + 16), behavior: "smooth" });
  });
}

function renderRows(projects) {
  rowsArea.innerHTML = "";

  CATEGORY_CONFIG.forEach((rowConfig) => {
    const items = sortProjectsForRow(
      projects.filter((project) => {
        if (rowConfig.id === "featured") return project.featured || project.categories.includes("featured");
        return project.categories.includes(rowConfig.id);
      }),
      rowConfig.id
    );

    createRow(rowConfig, items);
  });
}

async function renderCadArchivePreview() {
  cadArchiveSection = document.getElementById("cadArchiveSection");
  cadArchiveCollage = document.getElementById("cadArchiveCollage");

  if (!cadArchiveSection || !cadArchiveCollage) return;

  try {
    const response = await fetch("/data/additional-cad-work.generated.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load CAD archive data.");

    const images = await response.json();

    if (!images.length) {
      cadArchiveSection.remove();
      return;
    }

    cadArchiveCollage.innerHTML = "";

    images.slice(0, 18).forEach((item, index) => {
      const cell = document.createElement("div");
      cell.className = "cad-archive-thumb";
      cell.innerHTML = `<img src="${item.src}" alt="Additional CAD Work ${index + 1}" loading="lazy" />`;
      cadArchiveCollage.appendChild(cell);
    });
  } catch (error) {
    console.error(error);
    cadArchiveSection?.remove();
  }
}

async function init() {
  rowsArea = document.getElementById("rowsArea");
  spotlightPanel = document.getElementById("spotlightPanel");
  spotlightIndicators = document.getElementById("spotlightIndicators");
  modalBackdrop = document.getElementById("modalBackdrop");
  closeModal = document.getElementById("closeModal");
  modalTitle = document.getElementById("modalTitle");
  modalCategory = document.getElementById("modalCategory");
  modalDescription = document.getElementById("modalDescription");
  modalOverview = document.getElementById("modalOverview");
  modalHighlights = document.getElementById("modalHighlights");
  modalMeta = document.getElementById("modalMeta");
  modalMedia = document.getElementById("modalMedia");

  ensureModalProjectLink();

  closeModal.addEventListener("click", hideModal);

  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      hideModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalBackdrop.classList.contains("active")) {
      hideModal();
    }
  });

  try {
    const response = await fetch("/data/projects.generated.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load generated project data.");
    const projects = (await response.json()).sort(sortProjects);

    spotlightProjects = projects.filter((project) => project.spotlight).slice(0, 3);
    if (!spotlightProjects.length) {
      spotlightProjects = projects.filter((project) => project.featured).slice(0, 3);
    }

    buildSpotlight(spotlightProjects);
    renderRows(projects);
    showSpotlight(0);
    startSpotlightTimer();
    await renderCadArchivePreview();
  } catch (error) {
    console.error(error);
    rowsArea.innerHTML = `
      <section class="row-section">
        <div class="row-header-left">
          <h2>Project data failed to load</h2>
        </div>
      </section>
    `;
  }
}

document.addEventListener("DOMContentLoaded", init);
