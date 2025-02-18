// Simulación de datos en tiempo real
function updateData() {
    const currentTime = new Date().toLocaleTimeString();
    
    // Aquí puedes añadir más lógica para actualizar los datos de los sensores
    const newData = [
        { sensor: 'Temperatura', value: `${Math.floor(Math.random() * 30)}°C`, time: currentTime },
        { sensor: 'Humedad', value: `${Math.floor(Math.random() * 100)}%`, time: currentTime }
    ];

    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar los nuevos datos

    newData.forEach((data) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.sensor}</td>
            <td>${data.value}</td>
            <td>${data.time}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Llamar a la función para actualizar los datos cada 5 segundos (o el tiempo de actualización deseado)
setInterval(updateData, 5000);  // Actualizar cada 5 segundos
