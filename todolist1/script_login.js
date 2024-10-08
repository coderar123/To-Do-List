document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (firstname && lastname && email && password) {
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        alert('Please fill out all fields.');
    }
});
