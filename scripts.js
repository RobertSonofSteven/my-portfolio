// Select the project container and the project cards
const projectContainer = document.querySelector('.project-container');
const projectCards = document.querySelectorAll('.project-card');

// Initialize the index of the currently highlighted project
let currentIndex = 0;

// Function to highlight the current project card
function highlightProject(index) {
    projectCards.forEach((card, i) => {
        card.classList.remove('highlighted');
        if (i === index) {
            card.classList.add('highlighted');
        }
    });
}

// Navigate to the next project
function nextProject() {
    currentIndex = (currentIndex + 1) % projectCards.length;
    highlightProject(currentIndex);
    projectContainer.scrollTo(projectCards[currentIndex].offsetLeft, 0);
}

// Navigate to the previous project
function prevProject() {
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    highlightProject(currentIndex);
    projectContainer.scrollTo(projectCards[currentIndex].offsetLeft, 0);
}

// Add event listeners for the left and right arrows
document.getElementById('prev').addEventListener('click', prevProject);
document.getElementById('next').addEventListener('click', nextProject);

// Enable keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextProject();
    } else if (event.key === 'ArrowLeft') {
        prevProject();
    }
});

// Initially highlight the first project
highlightProject(currentIndex);
