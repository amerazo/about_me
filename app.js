// waiting for the DOM to be fully loaded before executing the JS code
document.addEventListener("DOMContentLoaded", function () {
// attempting to get references to various HTML elements using their ids
const toggleNavButton = document.getElementById('toggleNav'); // menu button
const mobileNavList = document.getElementById('mobileNavList'); // mobile nav button
const modal = document.getElementById("modal"); // modal container
const modalClose = document.getElementById("modalClose"); // modal close button
const subscribeForm = document.getElementById("subscribe-form"); // supscription form
const emailInput = document.getElementById("email"); // email input form
const subscriptionMessage = document.getElementById("subscription-message"); // subscription success message

// added an event listener to the modal close button
modalClose.addEventListener("click", function () {
// hiding the modal when the close button is clicked; to provide better UX experience
modal.style.display = "none";
});

// adding an event listener to the subscription form when it is submitted
subscribeForm.addEventListener("submit", function (e) {
e.preventDefault(); // prevent the default form submission behavior
const email = emailInput.value; // receive the entered email address
subscriptionMessage.textContent = "You've been subscribed!"; // display the subscription success message
emailInput.value = ""; // clear the email input field when submitted

// close the modal after a delay of 1 second (1000 milliseconds)
setTimeout(function () {
modal.style.display = "none";
}, 1000);
});

// show the modal after a delay of 5 seconds (5000 milliseconds)
setTimeout(function () {
modal.style.display = "block";
}, 5000);

// check if the toggleNavButton and mobileNavList elements exist
if (toggleNavButton && mobileNavList) {
toggleNavButton.addEventListener('click', () => {
mobileNavList.classList.toggle('hidden'); // toggling the 'hidden' class to show/hide the mobile nav menu
});
}
});
