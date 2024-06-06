document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check username and password
    if (username === 'admin' && password === 'admin') {
        window.location.href = '../index.html'; // Redirect to admin page
    } else if (username === 'user' && password === 'user') {
        window.location.href = 'user/service.html'; // Redirect to user page
    } else {
        alert('Invalid username or password');
    }
});