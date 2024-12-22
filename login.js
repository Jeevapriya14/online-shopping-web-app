document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 
    window.location.href="signin.html" // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (!email || !password) {
        alert("Please fill in all the fields.");
        return;
    }
    

    const formData = {
        email,
        password
    };

    try {
        // Make a POST request to submit the form data (you can modify the URL to your backend)
        const response = await axios.post("http://localhost:8000/login", formData);

        if (response.data === "incorrect") {
            // Handle if login is incorrect
            alert("Incorrect username or password!");
        } else if (response.data === "success") {
            // Handle successful login
            window.location.href = "signin.html";
        } else {
            alert("Unexpected response: " + response.data);
        }
    } catch (error) {
        console.error(error);
        alert("Error occurred. Please try again.");
    }
});
document.getElementById('sub').addEventListener('click', function () {
    window.location.href = "signin.html"; // Redirect to the sign-up page
});

// Handle onChange for form fields
document.getElementById('email').addEventListener('input', function (e) {
    // Example logic, can be expanded for validation or field-specific checks
    console.log('Email input changed:', e.target.value);
});

document.getElementById('password').addEventListener('input', function (e) {
    // Example logic for password validation or length check
    console.log('Password input changed:', e.target.value);
});
