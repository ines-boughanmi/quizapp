const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  joueur: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    min: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Score', scoreSchema);
