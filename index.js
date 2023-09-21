require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connection = require('./db');
const mailRoutes = require('./routes/mail');
const surveyRoutes = require('./routes/survey');

// Connect to the database
connection();

// Middleware
const app = express();
app.use(express.json());
app.use(cors());

/* // Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar rutas del SPA
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
}); */

// Routes
app.use('/api/mail', mailRoutes);
app.use('/api/survey', surveyRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
});