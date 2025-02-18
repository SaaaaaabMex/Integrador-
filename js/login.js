const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Validación básica de campos
    if (!email || !password) {
        return alert('Por favor ingrese todos los campos.');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos.');
    }

    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'index.html';
});