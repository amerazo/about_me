// function created to fadein the name camelCase
function fadeInName() {
    const nameElement = document.getElementById('name');
    if (nameElement) {
        nameElement.classList.remove('hidden');
        nameElement.classList.add('animate-fade-in');
    }
}

// call the fadeInName function after the page loads
window.addEventListener('load', fadeInName);

// Define toggleNavButton and mobileNavList
const toggleNavButton = document.getElementById('toggleNav');
const mobileNavList = document.getElementById('mobileNavList');

// Toggle mobile navigation menu
if (toggleNavButton && mobileNavList) {
    toggleNavButton.addEventListener('click', () => {
        mobileNavList.classList.toggle('hidden');
    });
}

