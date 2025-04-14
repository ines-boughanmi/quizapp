const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  user: String, // Nom ou identifiant de l'utilisateur
  score: Number, // Score obtenu
  date: { type: Date, default: Date.now } // Date du score
});

module.exports = mongoose.model('Score', scoreSchema);