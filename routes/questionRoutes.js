const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Route pour récupérer toutes les questions ou filtrer par type
router.get('/', async (req, res) => {
  try {
    const { type } = req.query; // On récupère le type depuis la query string

    let filter = {};
    if (type) {
      filter.type = type; // Si un type est spécifié, on filtre par type
    }

    const questions = await Question.find(filter); // Recherche selon le filtre
    res.json(questions); // Retourne les questions
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

console.log("📍 Fichier scoreRoutes.js chargé");

module.exports = router;
