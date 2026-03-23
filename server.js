const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const dataFile = path.join(__dirname, "data.json");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Sirve index.html, admin.html, etc.

// Rutas de la API
// GET /api/data - Leer configuración
app.get("/api/data", (req, res) => {
    fs.readFile(dataFile, "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Error leyendo datos." });
        }
        res.json(JSON.parse(data));
    });
});

// POST /api/data - Guardar nueva configuración
app.post("/api/data", (req, res) => {
    const newData = req.body;
    fs.writeFile(dataFile, JSON.stringify(newData, null, 2), "utf8", err => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, error: "Error guardando datos." });
        }
        res.json({ success: true, message: "Datos actualizados correctamente." });
    });
});

// Inicia servidor
app.listen(PORT, () => {
    console.log(`Servidor CMS iniciado en http://localhost:${PORT}`);
    console.log(`Panel de administración disponible en http://localhost:${PORT}/admin.html`);
});
