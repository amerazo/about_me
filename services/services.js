// resource: https://forum.freecodecamp.org/t/flipping-cards-to-show-new-innerhtml/428355
function flipCard(card) {
    card.querySelector('.flipper').classList.toggle('flipped');
}

// JS to toggle navigation on smaller screens
const toggleButton = document.getElementById('toggleNav');
const navList = document.querySelector('nav ul');

if (toggleButton && navList) {
    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
}
