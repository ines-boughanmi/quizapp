const express = require('express');
const router = express.Router();
const Score = require('../models/Score'); 

// Route pour récupérer les scores
router.get('/user/:username', async (req, res) => {
  console.log('✅ Route GET /scores appelée');
  try {
    const scores = await Score.find({ joueur: req.params.username} ).sort({ score: -1 });
    res.status(200).json(scores);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des scores :', error);
    res.status(500).json({ message: 'Erreur serveur', error});
  }
});
console.log("📍 Fichier scoreRoutes.js chargé");

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

// POST /scores => Enregistrer un score
router.post('/', async (req, res) => {
  try {
    const { joueur, score, date } = req.body;

    const newScore = new Score({ joueur, score, date });
    await newScore.save();

    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'enregistrement du score', error });
  }
});

module.exports = router;

/*
// DELETE /scores => Supprimer tous les scores
router.delete('/', async (req, res) => {
  try {
    await Score.deleteMany({});
    res.status(200).json({ message: 'Tous les scores ont été supprimés.' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression des scores.', error });
  }
});
*/