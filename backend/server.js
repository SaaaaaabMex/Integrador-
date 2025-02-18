// backend/server.js
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Obtener datos de sensores
app.get("/sensores", (req, res) => {
  db.query("SELECT * FROM sensores", (err, results) => {
    if (err) {
      res.status(500).send("Error al obtener los datos");
    } else {
      res.json(results);
    }
  });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
