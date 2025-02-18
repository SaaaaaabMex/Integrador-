// frontend/script.js
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/sensores")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Aquí puedes procesar los datos y mostrarlos en tu HTML
        const sensorContainer = document.getElementById("sensor-data");
        data.forEach((sensor) => {
          const sensorElement = document.createElement("p");
          sensorElement.textContent = `ID: ${sensor.id_sensor}, Tipo: ${sensor.tipo_sensor}, Valor: ${sensor.valor}`;
          sensorContainer.appendChild(sensorElement);
        });
      })
      .catch((error) => console.error("Error:", error));
  });
  