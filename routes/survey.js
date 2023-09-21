// Importar el modelo
const Survey = require('../models/survey');  // Ajusta la ruta según tu estructura de proyecto

const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, responses, selectedScales } = req.body;

    const newSurvey = new Survey({
      name,
      responses,
      selectedScales
    });

    await newSurvey.save();
    res.status(200).json({ message: 'Survey saved successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
