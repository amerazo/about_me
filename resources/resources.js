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

// JS to toggle navigation on smaller screens
const toggleButton = document.getElementById('toggleNav');
const navList = document.querySelector('nav ul');

if (toggleButton && navList) {
    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
}


console.log(toggleButton);
console.log(navList);
