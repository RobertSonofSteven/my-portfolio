const projectCatalog = {
  vaporlogic: {
    title: "VaporLogicAI",
    category: "Work / Automation",
    tone: "work",
    summary: "Zone-based moisture control concept for corrugated board quality and warpage correction.",
    description: "A control-focused concept for improving corrugated board flatness with smarter zone-based spray control.",
    overview: "This project explores a water spraying system for corrugated paper manufacturing using atomizing nozzles, air and water control, and future feedback-driven tuning. It is a strong example of mechanical, controls, and product-thinking overlap.",
    highlights: ["Multi-zone nozzle strategy", "Air and water mixture control", "Designed around practical manufacturability", "Expandable toward PID plus AI feedback"],
    meta: ["Controls", "Mechanical Design", "Concept Development"],
    pageUrl: "#",
    heroLabel: "Featured Project"
  },
  macropad: {
    title: "Macro Pad PCB",
    category: "Personal / Electronics",
    tone: "personal",
    summary: "A custom macro pad concept with knobs, hall-effect inputs, and a purpose-built PCB.",
    description: "A hardware project combining industrial design, input ergonomics, and PCB planning.",
    overview: "This project is intended to showcase a mix of enclosure design, electronics integration, and user interface thinking. It can later include schematics, PCB renders, firmware notes, and prototype photos.",
    highlights: ["Custom PCB direction", "Rotary control inputs", "Potential hall-effect switch integration", "Good project for CAD and electronics crossover"],
    meta: ["PCB", "KiCad", "Prototype"],
    pageUrl: "#",
    heroLabel: "Featured Project"
  },
  encoder: {
    title: "Magnetic Encoder Redesign",
    category: "Work / Product Design",
    tone: "work",
    summary: "Redesign work involving magnetic encoder packaging, manufacturability, and system integration.",
    description: "An engineering-focused redesign project that can highlight practical constraints and real-world iteration.",
    overview: "This entry is a strong candidate for a case-study page showing the design process, packaging constraints, cost considerations, electrical coordination, and implementation outcomes.",
    highlights: ["Sensor integration", "Packaging constraints", "Cross-functional work", "Real product impact"],
    meta: ["Industrial", "Hall Sensor", "Design Iteration"],
    pageUrl: "#",
    heroLabel: "Featured Project"
  },
  arcade: {
    title: "CRT Arcade Cabinet",
    category: "Personal / Build",
    tone: "personal",
    summary: "A retro gaming build combining Raspberry Pi setup, controls, and CRT presentation.",
    description: "A hands-on project that blends electronics, fabrication, interface setup, and nostalgic product design.",
    overview: "This project has great visual appeal and gives your portfolio personality. It can show troubleshooting, mechanical mounting, software setup, user-experience thinking, and finish details.",
    highlights: ["Raspberry Pi integration", "CRT display tuning", "Control wiring", "High visual interest"],
    meta: ["Build", "Raspberry Pi", "User Experience"],
    pageUrl: "#",
    heroLabel: "Personal Highlight"
  },
  portfolio: {
    title: "Portfolio Website",
    category: "Personal / Web",
    tone: "personal",
    summary: "The site itself can become a project, documenting design choices and implementation.",
    description: "A meta-project that demonstrates visual communication and technical presentation.",
    overview: "Even though this is not a traditional mechanical project, it is still worth including as a brief case study because it shows how you communicate engineering work, structure information, and present yourself professionally.",
    highlights: ["Clear project storytelling", "Custom visual system", "Professional branding", "GitHub-hosted deployment"],
    meta: ["Frontend", "Branding", "Documentation"],
    pageUrl: "#",
    heroLabel: "Personal Highlight"
  },
  velocity: {
    title: "Barbell Velocity Tracker",
    category: "Personal / Fitness Tech",
    tone: "fitness",
    summary: "A concept for measuring lifting speed and rep performance using sensors and data.",
    description: "A technical concept with room for hardware, mechanics, and data visualization.",
    overview: "This project could become a very strong engineering portfolio piece because it crosses mechanical setup, sensor mounting, data acquisition, and user-focused product thinking.",
    highlights: ["Sensor-driven concept", "Fitness hardware angle", "Data display potential", "Prototype-friendly"],
    meta: ["Hardware", "Sensors", "Data"],
    pageUrl: "#",
    heroLabel: "Fitness Highlight"
  },
  repcounter: {
    title: "Smart Rep Counter",
    category: "Personal / Embedded",
    tone: "fitness",
    summary: "A workout-oriented embedded device concept for tracking exercise repetitions accurately.",
    description: "A practical user-centered product idea that can show design-for-use thinking.",
    overview: "This is the kind of project that can be documented from concept sketches through prototype testing. It has strong potential as a portfolio piece because the value proposition is easy to understand immediately.",
    highlights: ["Embedded product concept", "Clear user problem", "Prototype opportunities", "Good for quick visuals"],
    meta: ["Embedded", "UX", "Prototype"],
    pageUrl: "#",
    heroLabel: "Fitness Highlight"
  },
  stewart: {
    title: "Stewart Platform Ping Pong Concept",
    category: "Personal / Mechanical Systems",
    tone: "personal",
    summary: "A dynamic motion-control concept exploring repeated bounce control and actuation.",
    description: "A visually interesting concept that can showcase mechanism thinking and system design.",
    overview: "This project is useful because it communicates engineering curiosity. It can highlight mechanism layout, control ideas, and the challenge of balancing responsiveness, motion range, and stability.",
    highlights: ["Mechanism design", "Motion control concept", "Strong visual storytelling", "Cross-disciplinary potential"],
    meta: ["Mechanics", "Motion", "Control"],
    pageUrl: "#",
    heroLabel: "Personal Highlight"
  },
  printer: {
    title: "3D Printer Upgrade / Rebuild",
    category: "Personal / Fabrication",
    tone: "fabrication",
    summary: "A rebuild-oriented project using older hardware as a platform for refinement and learning.",
    description: "A practical engineering build that demonstrates troubleshooting and iterative improvement.",
    overview: "This can be framed as a system optimization project rather than just a hobby build. Documenting decisions, changes, and improvements would make it portfolio-worthy.",
    highlights: ["Hands-on integration", "Mechanical tuning", "Hardware reuse", "Practical iteration"],
    meta: ["Fabrication", "Optimization", "Build"],
    pageUrl: "#",
    heroLabel: "3D Printing Highlight"
  },
  lx470: {
    title: "LX470 Cooling System Troubleshooting",
    category: "Car / Diagnosis",
    tone: "car",
    summary: "A vehicle troubleshooting case built around cooling system behavior, airflow, and diagnosis.",
    description: "A hands-on automotive project that can show diagnostic logic and practical mechanical reasoning.",
    overview: "This can become a clean portfolio story about identifying symptoms, investigating causes, and narrowing down mechanical issues in a real vehicle system. It is useful because it shows methodical engineering thinking applied outside formal product development.",
    highlights: ["Real-world diagnosis", "Mechanical troubleshooting", "System-level thinking", "Strong problem-solving angle"],
    meta: ["Automotive", "Diagnosis", "Hands-On"],
    pageUrl: "#",
    heroLabel: "Car Highlight"
  },
  magsafe: {
    title: "Panel-Mount MagSafe Charger Concept",
    category: "Car / Electronics",
    tone: "car",
    summary: "A vehicle-mounted charging concept combining packaging, power conversion, and clean integration.",
    description: "A compact automotive electronics concept focused on function, fit, and finish.",
    overview: "This is a good portfolio piece because it feels like a real consumer product. It can show packaging constraints, electrical considerations, mounting design, and a thoughtful user experience inside a vehicle environment.",
    highlights: ["Power and packaging integration", "Consumer product feel", "Vehicle installation context", "Strong CAD opportunity"],
    meta: ["Automotive", "Electronics", "Packaging"],
    pageUrl: "#",
    heroLabel: "Car Highlight"
  },
  display: {
    title: "Rugged Display Redesign",
    category: "Work / Product Design",
    tone: "work",
    summary: "A work-style placeholder for a product redesign focused on packaging, usability, and implementation.",
    description: "A professional-looking case-study slot for a future work project writeup.",
    overview: "This placeholder keeps the work row full while giving you a spot for another strong product design case study. Later it can be replaced with a real project from your job or consulting work.",
    highlights: ["Product redesign structure", "Manufacturing awareness", "Clean placeholder for future case study", "Fits professional portfolio tone"],
    meta: ["Work Sample", "Future Case Study", "Product Design"],
    pageUrl: "#",
    heroLabel: "Work Highlight"
  },
  enclosure: {
    title: "3D Printed Electronics Enclosure",
    category: "3D Printing / Prototype",
    tone: "fabrication",
    summary: "A category-fit placeholder for enclosure design, prototype iteration, and print-for-fit work.",
    description: "A flexible fabrication project slot for a future printed enclosure case study.",
    overview: "This is a useful placeholder because it fits naturally with your printer, electronics, and product design interests. It can later become a real project with design iterations, print settings, and fit testing photos.",
    highlights: ["Prototype enclosure workflow", "Print-for-fit testing", "Product design crossover", "Strong visual documentation potential"],
    meta: ["3D Printing", "Enclosure", "Prototype"],
    pageUrl: "#",
    heroLabel: "3D Printing Highlight"
  }
};

const spotlightProjects = ["vaporlogic", "macropad", "encoder"];

const rows = [
  {
    id: "featured-row",
    title: "Featured",
    description: "A curated first row with the projects you most want people to notice first.",
    items: ["vaporlogic", "macropad", "encoder", "arcade", "portfolio"]
  },
  {
    id: "work",
    title: "Work",
    description: "Professional projects, product redesigns, automation ideas, and engineering work samples.",
    items: ["vaporlogic", "encoder", "display"]
  },
  {
    id: "personal",
    title: "Personal",
    description: "Projects that show curiosity, initiative, build skill, and cross-disciplinary thinking.",
    items: ["arcade", "macropad", "stewart", "portfolio"]
  },
  {
    id: "fitness",
    title: "Fitness Tech",
    description: "Sensors, devices, and concepts built around lifting, training, and performance tracking.",
    items: ["velocity", "repcounter"]
  },
  {
    id: "car",
    title: "Car",
    description: "Automotive projects, troubleshooting, and vehicle-related design or integration ideas.",
    items: ["lx470", "magsafe"]
  },
  {
    id: "fabrication",
    title: "3D Printing",
    description: "Fabrication-heavy projects, printer tuning, prototype development, and printed components.",
    items: ["printer", "enclosure", "macropad"]
  }
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

let spotlightIndex = 0;
let spotlightTimer = null;

function getToneGlow(tone) {
  switch (tone) {
    case "personal":
      return "rgba(95, 179, 255, 0.26)";
    case "fitness":
      return "rgba(255, 171, 74, 0.3)";
    case "car":
      return "rgba(97, 232, 163, 0.24)";
    case "fabrication":
      return "rgba(180, 145, 255, 0.24)";
    default:
      return "rgba(229, 9, 20, 0.24)";
  }
}

function getToneBase(tone) {
  switch (tone) {
    case "personal":
      return "#1c2c40";
    case "fitness":
      return "#392714";
    case "car":
      return "#173125";
    case "fabrication":
      return "#261c3c";
    default:
      return "#311214";
  }
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalOverview.textContent = project.overview;

  modalHighlights.innerHTML = "";
  project.highlights.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    modalHighlights.appendChild(li);
  });

  modalMeta.innerHTML = "";
  project.meta.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "meta-chip";
    chip.textContent = item;
    modalMeta.appendChild(chip);
  });

  modalMedia.style.background = `
    linear-gradient(90deg, rgba(0,0,0,0.18), rgba(0,0,0,0.3)),
    radial-gradient(circle at 18% 18%, ${getToneGlow(project.tone)}, transparent 22%),
    radial-gradient(circle at 82% 72%, rgba(255,255,255,0.07), transparent 20%),
    linear-gradient(145deg, #2b2b2b 0%, #151515 50%, #0b0b0b 100%)
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

function createSpotlight() {
  spotlightPanel.innerHTML = "";
  spotlightIndicators.innerHTML = "";

  spotlightProjects.forEach((key, index) => {
    const project = projectCatalog[key];
    if (!project) return;

    const slide = document.createElement("article");
    slide.className = `spotlight-slide${index === 0 ? " active" : ""}`;
    slide.dataset.index = String(index);
    slide.style.setProperty("--spotlight-glow", getToneGlow(project.tone));
    slide.style.setProperty("--spotlight-base", getToneBase(project.tone));
    slide.innerHTML = `
      <div class="spotlight-copy">
        <span class="eyebrow">${project.heroLabel}</span>
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <div class="spotlight-actions">
          <a class="button primary" href="${project.pageUrl}">View Project Page</a>
          <button class="button secondary" type="button">Quick View</button>
        </div>
        <div class="spotlight-meta">
          ${project.meta.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="spotlight-visual" aria-hidden="true"></div>
    `;

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
  }, 30000);
}

function restartSpotlightTimer() {
  startSpotlightTimer();
}

function createCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.tone = project.tone || "work";
  card.setAttribute("tabindex", "0");
  card.innerHTML = `
    <div class="project-visual"></div>
    <div class="project-overlay">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
    </div>
  `;

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

function createRow(row) {
  const section = document.createElement("section");
  section.className = "row-section";
  section.id = row.id;

  const header = document.createElement("div");
  header.className = "row-header";
  header.innerHTML = `
    <div class="row-header-left">
      <h2>${row.title}</h2>
      <p>${row.description}</p>
    </div>
    <div class="row-controls">
      <button class="row-control" type="button" aria-label="Scroll ${row.title} left">‹</button>
      <button class="row-control" type="button" aria-label="Scroll ${row.title} right">›</button>
    </div>
  `;

  const shell = document.createElement("div");
  shell.className = "row-shell";

  const track = document.createElement("div");
  track.className = "project-row";

  row.items.forEach((key) => {
    const project = projectCatalog[key];
    if (project) {
      track.appendChild(createCard(project));
    }
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

function renderRows() {
  rowsArea.innerHTML = "";
  rows.forEach(createRow);
}

function init() {
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

  createSpotlight();
  renderRows();
  showSpotlight(0);
  startSpotlightTimer();
}

document.addEventListener("DOMContentLoaded", init);
