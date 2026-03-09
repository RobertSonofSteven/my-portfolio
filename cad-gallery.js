const cadGalleryGrid = document.getElementById("cadGalleryGrid");
const cadLightbox = document.getElementById("cadLightbox");
const cadLightboxImage = document.getElementById("cadLightboxImage");
const cadLightboxClose = document.getElementById("cadLightboxClose");
const cadLightboxPrev = document.getElementById("cadLightboxPrev");
const cadLightboxNext = document.getElementById("cadLightboxNext");

let cadImages = [];
let cadIndex = 0;

function openCadLightbox(index) {
  cadIndex = index;
  updateCadLightbox();
  cadLightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCadLightbox() {
  cadLightbox.classList.remove("active");
  document.body.style.overflow = "";
}

function updateCadLightbox() {
  if (!cadImages.length) return;
  cadLightboxImage.src = cadImages[cadIndex].src;
  cadLightboxImage.alt = `Additional CAD Work ${cadIndex + 1}`;
}

function showPrevCadImage() {
  if (!cadImages.length) return;
  cadIndex = (cadIndex - 1 + cadImages.length) % cadImages.length;
  updateCadLightbox();
}

function showNextCadImage() {
  if (!cadImages.length) return;
  cadIndex = (cadIndex + 1) % cadImages.length;
  updateCadLightbox();
}

async function initCadGallery() {
  try {
    const response = await fetch("/data/additional-cad-work.generated.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load CAD gallery data.");

    cadImages = await response.json();

    cadGalleryGrid.innerHTML = "";

    cadImages.forEach((item, index) => {
      const tile = document.createElement("button");
      tile.className = "archive-tile";
      tile.type = "button";
      tile.innerHTML = `<img src="${item.src}" alt="Additional CAD Work ${index + 1}" loading="lazy" />`;
      tile.addEventListener("click", () => openCadLightbox(index));
      cadGalleryGrid.appendChild(tile);
    });
  } catch (error) {
    console.error(error);
  }
}

cadLightboxClose.addEventListener("click", closeCadLightbox);
cadLightboxPrev.addEventListener("click", showPrevCadImage);
cadLightboxNext.addEventListener("click", showNextCadImage);

cadLightbox.addEventListener("click", (event) => {
  if (event.target === cadLightbox) {
    closeCadLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (!cadLightbox.classList.contains("active")) return;

  if (event.key === "Escape") closeCadLightbox();
  if (event.key === "ArrowLeft") showPrevCadImage();
  if (event.key === "ArrowRight") showNextCadImage();
});

document.addEventListener("DOMContentLoaded", initCadGallery);
