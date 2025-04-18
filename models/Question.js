const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  type: { type: String, enum: ['qcm', 'vrai_faux', 'direct'], required: true },
  code: { type: String }, // facultatif : pour les snippets de code
  options: { type: [String] }, // seulement pour QCM
  answer: { type: mongoose.Schema.Types.Mixed, required: true }, // string ou bool
  explanation: { type: String }
});

module.exports = mongoose.model('Question', questionSchema);
