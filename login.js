document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 
    window.location.href="signin.html" 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (!email || !password) {
        alert("Please fill in all the fields.");
        return;
    }
    

    const formData = {
        email,
        password
    };

    try {
      
        const response = await axios.post("http://localhost:8000/login", formData);

        if (response.data === "incorrect") {
        
            alert("Incorrect username or password!");
        } else if (response.data === "success") {
         
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
    window.location.href = "signin.html"; 
});


document.getElementById('email').addEventListener('input', function (e) {
    
    console.log('Email input changed:', e.target.value);
});

document.getElementById('password').addEventListener('input', function (e) {
  
    console.log('Password input changed:', e.target.value);
});
