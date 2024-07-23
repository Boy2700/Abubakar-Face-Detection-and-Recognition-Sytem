function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Username or Password cannot be empty');
        return;
    }

    if (username === 'abubakar' && password === 'abubakar') {
        alert('Login Successful')
        window.location.href = 'home/home.html';
    } else {
        alert('Incorrect Username or Password');
    }
}