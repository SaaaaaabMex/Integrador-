document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registro-vehiculo');
    const listaVehiculos = document.getElementById('lista-vehiculos');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const placa = document.getElementById('placa').value;
        const modelo = document.getElementById('modelo').value;

        if (placa && modelo) {
            const nuevoVehiculo = document.createElement('li');
            nuevoVehiculo.textContent = `Placa: ${placa} | Modelo: ${modelo}`;
            listaVehiculos.appendChild(nuevoVehiculo);

            form.reset();
        }
    });

    document.getElementById('back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
