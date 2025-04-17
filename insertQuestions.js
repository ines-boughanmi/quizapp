/*const mongoose = require('mongoose');
const Question = require('./models/Question');  // Assurez-vous d'avoir le bon chemin vers votre modèle

require('dotenv').config();

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('✅ Connecté à MongoDB Atlas');

  // Questions à insérer
  const questions = [
    {
      question: "Quel mot-clé est utilisé pour hériter d’une classe en Java ?",
      options: ["implement", "inherit", "extends", "super"],
      answer: 2
    },
    {
      question: "Lequel de ces types est un type primitif en Java ?",
      options: ["int", "String", "ArrayList", "Object"],
      answer: 0
    },
    {
      question: "Quel mot-clé est utilisé pour gérer les exceptions en Java ?",
      options: ["try", "catch", "throw", "throws"],
      answer: 1
    }
  ];

  // Insertion dans la base de données
  await Question.insertMany(questions);
  console.log('✅ Questions ajoutées avec succès');
  mongoose.disconnect();
})
.catch(err => {
  console.error('❌ Erreur MongoDB :', err);
});
*/