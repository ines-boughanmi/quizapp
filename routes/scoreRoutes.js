const express = require('express');
const router = express.Router();
const Score = require('../models/Score'); 

// Route pour récupérer les scores
router.get('/', async (req, res) => {
  console.log('✅ Route GET /scores appelée');
  try {
    const scores = await Score.find().sort({ score: -1 });
    res.status(200).json(scores);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des scores :', error);
    res.status(500).json({ message: 'Erreur serveur', error});
  }
});
console.log("📍 Fichier scoreRoutes.js chargé");


module.exports = router;
