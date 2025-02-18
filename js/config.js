// Función para redirigir al inicio cuando se hace clic en "Volver al Inicio"
document.getElementById('back-button').addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirige a index.html
});

// Función para guardar la configuración cuando se hace clic en "Guardar Configuración"
document.getElementById('save-config').addEventListener('click', function () {
    // Obtener los valores del formulario
    const deviceName = document.getElementById('device-name').value.trim();
    const refreshRate = document.getElementById('refresh-rate').value.trim();
    const mode = document.getElementById('mode').value;

    // Validar que los campos no estén vacíos
    if (deviceName === '' || refreshRate === '' || isNaN(refreshRate) || refreshRate <= 0) {
        // Mostrar un mensaje de error si hay campos vacíos o el valor no es válido
        document.getElementById('status').textContent =
            'Por favor, complete todos los campos con valores válidos.';
        document.getElementById('status').style.color = 'red';
        return;
    }

    // Guardar los valores en el almacenamiento local
    const config = {
        deviceName,
        refreshRate: parseInt(refreshRate, 10),
        mode,
    };
    localStorage.setItem('deviceConfig', JSON.stringify(config));

    // Actualizar el estado de la configuración
    document.getElementById('status').textContent =
        'Configuración guardada exitosamente';
    document.getElementById('status').style.color = 'green';
});

// Cargar la configuración guardada al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    const savedConfig = JSON.parse(localStorage.getItem('deviceConfig'));
    if (savedConfig) {
        document.getElementById('device-name').value = savedConfig.deviceName;
        document.getElementById('refresh-rate').value = savedConfig.refreshRate;
        document.getElementById('mode').value = savedConfig.mode;
        document.getElementById('status').textContent =
            'Configuración cargada correctamente.';
        document.getElementById('status').style.color = 'green';
    }

    try {
        const savedConfig = JSON.parse(localStorage.getItem('deviceConfig'));
        if (savedConfig) {
            document.getElementById('device-name').value = savedConfig.deviceName;
            document.getElementById('refresh-rate').value = savedConfig.refreshRate;
            document.getElementById('mode').value = savedConfig.mode;
            document.getElementById('status').textContent =
                'Configuración cargada correctamente.';
            document.getElementById('status').style.color = 'green';
        }
    } catch (error) {
        console.error("Error al cargar la configuración:", error);
        document.getElementById('status').textContent =
            'Hubo un error al cargar la configuración.';
        document.getElementById('status').style.color = 'red';
    }
    
});
