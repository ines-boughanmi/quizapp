const express = require('express');
const router = express.Router();
const Score = require('../models/Score');

router.post('/', async (req, res) => {
  const { joueur, score } = req.body;
  try {
    const newScore = new Score({ joueur, score });
    await newScore.save();
    res.status(201).json({ message: 'Score enregistré !' });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
