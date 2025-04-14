const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});
console.log("📍 Fichier scoreRoutes.js chargé");

module.exports = router;
