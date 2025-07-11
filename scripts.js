// Select the project container and the project cards
const projectContainer = document.querySelector('.project-container');
const projectCards = document.querySelectorAll('.project-card');

// Initialize the index of the currently highlighted project
let currentIndex = 0;
let isMouseHovered = false; // To check if the mouse is hovering over a project

// Function to highlight the current project card
function highlightProject(index) {
    projectCards.forEach((card, i) => {
        card.classList.remove('highlighted');
        if (i === index) {
            card.classList.add('highlighted');
        }
    });
}

// Function to scroll to a specific project
function scrollToProject(index) {
    projectContainer.scrollTo(projectCards[index].offsetLeft, 0);
}

// Navigate to the next project (looping)
function nextProject() {
    currentIndex = (currentIndex + 1) % projectCards.length;
    highlightProject(currentIndex);
    scrollToProject(currentIndex);
}

// Navigate to the previous project (looping)
function prevProject() {
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    highlightProject(currentIndex);
    scrollToProject(currentIndex);
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
});

// Enable keyboard navigation (using arrow keys to move through projects)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (!isMouseHovered) {
            nextProject();
        }
    } else if (event.key === 'ArrowLeft') {
        if (!isMouseHovered) {
            prevProject();
        }
    }
});

// Initially highlight the first project
highlightProject(currentIndex);
