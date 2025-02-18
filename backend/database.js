// backend/database.js
const mysql = require("mysql2");

// Configura los datos de tu base de datos
const db = mysql.createConnection({
  host: "localhost", // Cambia si tu DB está en un servidor remoto
  user: "root",
  password: "",
  database: "sistema_monitoreo",
});

// Conéctate a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err);
  } else {
    console.log("Conexión exitosa a MySQL");
  }
});

module.exports = db;
