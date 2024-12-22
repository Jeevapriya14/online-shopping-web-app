document.querySelector('#signin-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const username = document.getElementById('user').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pass').value.trim();

    // Validation
    if (!username || !email || !password) {
        alert("All fields are required.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (/\S+@\S+\.\S+/.test(username)) {
        alert("Please enter a valid username");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Simulate successful signup (replace this with an actual backend request)
    alert("Signup successful! Redirecting to login page...");
    window.location.href = "index.html"; // Redirect to login page
});
