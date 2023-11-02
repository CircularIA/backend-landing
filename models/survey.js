const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    name: String, // nombre o identificador de la encuesta
    email: String,
    responses: mongoose.Schema.Types.Mixed // para almacenar las respuestas en la estructura proporcionada
},{timestamps:true});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;

