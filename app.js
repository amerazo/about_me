document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const modal = document.getElementById("modal");
      modal.style.display = "block";
  
      const subscribeForm = document.getElementById("subscribe-form");
      const emailInput = document.getElementById("email");
      const subscriptionMessage = document.getElementById("subscription-message");
  
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
    }, 5000); // show the modal after 5 seconds (5000 milliseconds)
  });
  