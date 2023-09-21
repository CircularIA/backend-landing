const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    id: String,
    text: String
});

const metricSchema = new mongoose.Schema({
    id: String,
    value: Number
});

const surveySchema = new mongoose.Schema({
    name: String,
    responses: [questionSchema],
    selectedScales: [metricSchema]
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
