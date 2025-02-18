document.addEventListener('DOMContentLoaded', () => {
    // Función para redirigir al inicio cuando se hace clic en "Volver al Inicio"
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';  // Redirige a index.html
        });
    } else {
        console.error('El botón con id "back-button" no se encuentra.');
    }
});
