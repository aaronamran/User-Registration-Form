// JavaScript source code file

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const registrationForm = document.getElementById('registration-form'); // Registration form element
    const enableDarkMode = document.getElementById('enable-dark-mode'); // Dark mode toggle button
    let darkModeEnabled = false; // Variable to track the dark mode state

    // Event listener for form submission
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get form input fields
        const nameInput = document.getElementById('name'); // Name input field
        const emailInput = document.getElementById('email'); // Email input field
        const passwordInput = document.getElementById('password'); // Password input field
        const confirmPasswordInput = document.getElementById('confirm-password'); // Confirm password input field

        // Get error message elements
        const nameError = document.getElementById('name-error'); // Name error message element
        const emailError = document.getElementById('email-error'); // Email error message element
        const passwordError = document.getElementById('password-error'); // Password error message element
        const confirmPasswordError = document.getElementById('confirm-password-error'); // Confirm password error message element

        // Reset error messages
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';

        // Validation logic
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        }

        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        if (isValid) {
            // Form is valid; you can submit the form to the server or perform other actions here
            alert('Registration successful!');
            registrationForm.reset(); // Clear the form
        }
    });

    // Event listener for toggling dark mode
    enableDarkMode.addEventListener('click', function () {
        if (darkModeEnabled) {
            // Disable dark mode
            document.body.classList.remove('dark-mode');
            enableDarkMode.textContent = 'Enable Dark Mode';
        } else {
            // Enable dark mode
            document.body.classList.add('dark-mode');
            enableDarkMode.textContent = 'Enable Light Mode';
        }
        darkModeEnabled = !darkModeEnabled; // Toggle dark mode state
    });
});
