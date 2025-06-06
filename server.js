const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const questionRoutes = require('./routes/questionRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('🎉 Backend QuizApp déployé avec succès !');
});



// Routes principales
app.use('/questions', questionRoutes);
app.use('/scores', (req, res, next) => {
  console.log(`📥 Requête vers /scores${req.url}`);
  next();
});
app.use('/scores', scoreRoutes); 
app.use('/auth', authRoutes);

console.log("📍 Routes /questions et /scores configurées");

app.use('/auth', authRoutes);

// Connexion à MongoDB et lancement du serveur
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connecté à MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
  });
})
.catch(err => console.error('❌ Erreur MongoDB :', err));
