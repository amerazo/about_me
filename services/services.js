// resource: https://forum.freecodecamp.org/t/flipping-cards-to-show-new-innerhtml/428355
function flipCard(card) {
    card.querySelector('.flipper').classList.toggle('flipped');
}

// define toggleNavButton and mobileNavList
const toggleNavButton = document.getElementById('toggleNav');
const mobileNavList = document.getElementById('mobileNavList');

// toggle mobile navigation menu
if (toggleNavButton && mobileNavList) {
    toggleNavButton.addEventListener('click', () => {
        mobileNavList.classList.toggle('hidden');
    });
}


