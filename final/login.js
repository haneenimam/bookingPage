
/* login */
document.addEventListener("DOMContentLoaded", function () {
    // Get DOM elements
    var emailButton = document.getElementById("email");
    var emailLoginForm = document.getElementById("emailLoginForm");
    var socialButtons = document.querySelectorAll(".optionsbtn");
    var loginForm = document.getElementById("emailForm");
    var backButton = document.getElementById("backButton");

    // Show email login form and hide social buttons
    emailButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default button behavior

        // Hide all social buttons
        for (var i = 0; i < socialButtons.length; i++) {
            socialButtons[i].style.display = "none";
        }

        // Show the email login form
        emailLoginForm.style.display = "block";
    });

    // Back button to show social buttons again
    backButton.addEventListener("click", function () {
        // Show all social buttons
        for (var i = 0; i < socialButtons.length; i++) {
            socialButtons[i].style.display = "block";
        }

        // Hide the email login form
        emailLoginForm.style.display = "none";
    });

    // Validate email and password on form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values and error elements
        var email = document.getElementById("emailInput").value;
        var password = document.getElementById("passwordInput").value;
        var emailError = document.getElementById("emailError");
        var passwordError = document.getElementById("passwordError");

        // Reset error messages
        emailError.style.display = "none";
        passwordError.style.display = "none";

        // Validate email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailError.style.display = "block";
            return;
        }

        // Validate password
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordError.style.display = "block";
            return;
        }

        // If validation passes, submit the form (or perform further actions)
        alert("Login successful!");
        window.location.href ="../index.html"; // Redirect to home page after payment
    });
});