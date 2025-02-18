document.addEventListener('DOMContentLoaded', () => {
    // Botón de regreso
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    } else {
        console.error('El botón con id "back-button" no se encuentra.');
    }

    // Contexto del gráfico
    const ctx = document.getElementById('pollution-chart').getContext('2d');

    // Función para generar datos aleatorios
    function generateRandomData() {
        return Array.from({ length: 4 }, () => Math.floor(Math.random() * 50) + 1);
    }

    // Datos iniciales
    const initialData = {
        labels: ['CO2', 'NO2', 'PM2.5', 'O3'],
        datasets: [{
            label: 'Nivel de Contaminantes',
            data: generateRandomData(), // Datos aleatorios iniciales
            backgroundColor: ['#1abc9c', '#3498db', '#e74c3c', '#9b59b6']
        }]
    };

    // Crear la gráfica
    const pollutionChart = new Chart(ctx, {
        type: 'bar',
        data: initialData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#333', // Color del texto de la leyenda
                    }
                },
                title: {
                    display: true,
                    text: 'Análisis de Niveles de Contaminación',
                    color: '#333', // Color del título
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#333', // Color del texto en el eje X
                    }
                },
                y: {
                    ticks: {
                        color: '#333', // Color del texto en el eje Y
                    }
                }
            }
        }
    });

    // Función para actualizar la gráfica con nuevos datos
    function updateChart() {
        const newData = generateRandomData(); // Generar nuevos datos aleatorios
        pollutionChart.data.datasets[0].data = newData;
        pollutionChart.update();
    }

    // Actualizar la gráfica cada 3 segundos
    setInterval(updateChart, 3000);
});