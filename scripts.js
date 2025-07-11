// Select the project container and the project cards
const projectContainer = document.querySelector('.project-container');
const projectCards = document.querySelectorAll('.project-card');

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
    project3: {
        title: "Project 3",
        description: "A short description of Project 3.",
        image: "project3-thumbnail.jpg",
        link: "project3.html"
    },
    project4: {
        title: "Project 4",
        description: "A short description of Project 4.",
        image: "project4-thumbnail.jpg",
        link: "project4.html"
    },
    project5: {
        title: "Project 5",
        description: "A short description of Project 5.",
        image: "project5-thumbnail.jpg",
        link: "project5.html"
    },
    project6: {
        title: "Project 6",
        description: "A short description of Project 6.",
        image: "project6-thumbnail.jpg",
        link: "project6.html"
    },
    project7: {
        title: "Project 7",
        description: "A short description of Project 7.",
        image: "project7-thumbnail.jpg",
        link: "project7.html"
    },
    project8: {
        title: "Project 8",
        description: "A short description of Project 8.",
        image: "project8-thumbnail.jpg",
        link: "project8.html"
    },
    project9: {
        title: "Project 9",
        description: "A short description of Project 9.",
        image: "project9-thumbnail.jpg",
        link: "project9.html"
    },
    project10: {
        title: "Project 10",
        description: "A short description of Project 10.",
        image: "project10-thumbnail.jpg",
        link: "project10.html"
    }
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

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
