// Select the project container and the project cards
const projectContainer = document.querySelector('.project-container');
const projectCards = document.querySelectorAll('.project-card');

// Initialize the index of the currently highlighted project
let currentIndex = 0;
let isMouseHovered = false; // To check if the mouse is hovering over a project

// Project data (you can modify with real data or load dynamically)
const projectData = {
    project1: {
        title: "Project 1",
        description: "A short description of Project 1.",
        image: "project1-thumbnail.jpg",  // Image shown in the modal
        link: "project1.html"  // Link to full project page
    },
    project2: {
        title: "Project 2",
        description: "A short description of Project 2.",
        image: "project2-thumbnail.jpg",
        link: "project2.html"
    },
    // Add data for other projects (3–10)
};

// Open the modal with project details
function openProject(projectId) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const image = document.getElementById("modalImage");
    const link = document.getElementById("modalLink");

    // Set project details based on the clicked card
    const project = projectData[projectId];

    title.innerHTML = project.title;
    description.innerHTML = project.description;
    image.src = project.image;
    link.href = project.link;

    modal.style.display = "block"; // Show the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none"; // Close the modal
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none"; // Close the modal
    }
}

// Add event listeners for the left and right arrows for scrolling
document.getElementById('prev').addEventListener('click', () => {
    projectContainer.scrollBy(-projectCards[0].offsetWidth * 2, 0); // Scroll by 2 projects left
});

document.getElementById('next').addEventListener('click', () => {
    projectContainer.scrollBy(projectCards[0].offsetWidth * 2, 0); // Scroll by 2 projects right
});

// Function to handle hover highlighting
projectCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        if (!isMouseHovered) {
            isMouseHovered = true;
            currentIndex = index;
            highlightProject(currentIndex);
        }
    });

    card.addEventListener('mouseleave', () => {
        isMouseHovered = false;
    });

    // When clicking on the card, open the quick view (modal)
    card.addEventListener('click', () => {
        const projectId = `project${index + 1}`;
        openProject(projectId);
    });
});

// Initially highlight the first project
highlightProject(currentIndex);
