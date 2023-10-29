

document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registration-form');
    const enableDarkMode = document.getElementById('enable-dark-mode');
    let darkModeEnabled = false;

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Get form input fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');

        // Get error message elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const confirmPasswordError = document.getElementById('confirm-password-error');

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

    enableDarkMode.addEventListener('click', function () {
        if (darkModeEnabled) {
            document.body.classList.remove('dark-mode');
            enableDarkMode.textContent = 'Enable Dark Mode';
        } else {
            document.body.classList.add('dark-mode');
            enableDarkMode.textContent = 'Enable Light Mode';
        }
        darkModeEnabled = !darkModeEnabled;
    });
});
