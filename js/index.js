// Verificar si el usuario está autenticado
const user = JSON.parse(localStorage.getItem('login_success')) || null;

if (!user) {
    // Si no se encuentra el usuario, redirigir a la página de login
    window.location.href = 'login.html';
}

// Funcionalidad para cerrar sesión
const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    // Confirmación de cierre de sesión
    const confirmLogout = confirm("¿Estás seguro de que deseas cerrar sesión?");
    if (confirmLogout) {
        localStorage.removeItem('login_success'); // Eliminar datos del usuario
        alert('Hasta pronto!');
        window.location.href = 'login.html'; // Redirigir al login
    }
});

// Funcionalidad de la barra de navegación (desaparece al hacer scroll hacia abajo y reaparece al subir)
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll hacia abajo: ocultar la barra
        nav.style.top = '-80px';
    } else {
        // Scroll hacia arriba: mostrar la barra
        nav.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evitar valores negativos
});

// Simulación del estado del tráfico
const trafficStatuses = document.querySelectorAll('.traffic-status');

// Función para simular cambios en el estado del tráfico
function simulateTraffic() {
    const states = ['bajo', 'moderado', 'alto'];
    const randomState = states[Math.floor(Math.random() * states.length)];

    trafficStatuses.forEach(status => {
        if (status.dataset.status === randomState) {
            status.classList.add('active');
        } else {
            status.classList.remove('active');
        }
    });
}

// Cambiar estado del tráfico cada 5 segundos
setInterval(simulateTraffic, 5000);

// Añadir estilo visual al estado activo
document.querySelectorAll('.traffic-status').forEach(status => {
    status.classList.add('traffic-style');
});
