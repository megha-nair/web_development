// Function to validate the form
function validateForm(event) {
    // Prevent form submission
    event.preventDefault();

    // Get form elements
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("msg").value.trim();

    // Get span elements for error messages
    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var subError = document.getElementById("subError");
    var msgError = document.getElementById("msgError");

    nameError.textContent = "";
    nameError.style.color = 'red';
    emailError.textContent = "";
    emailError.style.color = 'red';
    subError.textContent = "";
    subError.style.color = 'red';
    msgError.textContent = "";
    msgError.style.color = 'red';

    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate fields
    let isValid = true;

    if (name === "") {
        nameError.textContent = "Please enter your name.";
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (subject === "") {
        subError.textContent = "Please enter a subject.";
        isValid = false;
    }

    if (message === "") {
        msgError.textContent = "Please enter a message.";
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        document.querySelector("form").submit();
    }
}

// Attach event listener to the form
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", validateForm);
});
