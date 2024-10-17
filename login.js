// Get the form element
const loginForm = document.getElementById('loginForm');

// Add an event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get the input values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate a login check (replace with actual authentication logic later)
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        // Redirect or other actions can be added here
        // For example: window.location = "/dashboard";
    } else {
        // Show an error message if login fails
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = "Invalid username or password.";
    }
});