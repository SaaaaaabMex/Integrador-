const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // Validación de campos
    if (!name || !email || !password) {
        return alert('Todos los campos son obligatorios.');
    }

    // Validación del formato del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return alert('Por favor ingresa un correo electrónico válido.');
    }

    // Validación de contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        return alert('La contraseña debe tener al menos 6 caracteres.');
    }

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);

    if (isUserRegistered) {
        return alert('El usuario ya está registrado.');
    }

    Users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro exitoso!');
    window.location.href = 'login.html';
});
