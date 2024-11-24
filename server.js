const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Exemple de route pour l'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur votre site TrueFit');
});

// Route pour les recommandations (exemple fictif)
app.post('/recommendation', (req, res) => {
  const { weight, height } = req.body;

  if (!weight || !height) {
    return res.status(400).json({ error: 'Veuillez fournir le poids et la taille.' });
  }

  // Logique fictive pour déterminer une taille
  const size = weight > 70 ? 'L' : 'M';

  res.json({ size });
});

// Lancer le serveur
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
