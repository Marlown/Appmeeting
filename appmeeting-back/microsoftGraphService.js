const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Route pour récupérer les événements du calendrier
app.get('/get_calendar_events', async (req, res) => {
  try {
    // Récupérer le token d'accès depuis le fichier .env
    const accessToken = process.env.MICROSOFT_GRAPH_ACCESS_TOKEN;

    // Définir l'URL de l'endpoint Microsoft Graph pour récupérer les événements du calendrier
    const graphApiUrl = 'https://graph.microsoft.com/v1.0/me/events';

    // Faire une requête GET à l'API Microsoft Graph avec le token d'accès
    const response = await axios.get(graphApiUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Renvoyer les événements en réponse
    const events = response.data.value;
    res.json(events);
  } catch (error) {
    console.error('Erreur lors de la récupération des événements :', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des événements' });
  }
});

// Démarrer le serveur Express sur le port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
