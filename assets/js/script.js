document
    .getElementById("subscribe-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        let emailInput = document.getElementById("subscribe");
        let email = emailInput.value;
        let responseMessageDiv = document.getElementById("subscribe-response-message");

        if (email === "") {
            responseMessageDiv.innerHTML = "Email address cannot be empty";
            responseMessageDiv.style.display = "block";
            return;
        }
    });