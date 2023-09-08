document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modalClose");
    const subscribeForm = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");
    const subscriptionMessage = document.getElementById("subscription-message");

    modalClose.addEventListener("click", function () {
        modal.style.display = "none";
    });

    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value;

        // subscription message
        subscriptionMessage.textContent = "You've been subscribed!";
        emailInput.value = "";

        setTimeout(function () {
            modal.style.display = "none";
        }, 1000); // close the modal after 1 sec
    });

    setTimeout(function () {
        modal.style.display = "block";
    }, 5000); // show the modal after 5 seconds (5000 milliseconds)
});

// JS to toggle navigation on smaller screens
const toggleNavButton = document.getElementById('toggleNav');
const navList = document.querySelector('nav ul');

if (toggleNavButton && navList) {
    toggleNavButton.addEventListener('click', () => {
        navList.classList.toggle('hidden');
    });
}