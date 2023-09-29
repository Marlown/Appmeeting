
const express = require('express');

const hostname = "0.0.0.0";//tous le monde peut se connecter 
const port = 3000;

const server = express()

const cors = require('cors');
server.use(cors());

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/apinodepmn');// url de configuration de la base de données

server.use(express.urlencoded({extended: true}));//annalyse les données de la requête (des données POST)
server.use(express.json());

// Routes
const postRoute = require('./api/routes/postRoute.js');
server.use('/posts', postRoute);

const commentRoute = require('./api/routes/commentRoute.js');
server.use('/', commentRoute);

server.listen(port, hostname);

// Route pour récupérer les réunions depuis Microsoft Graph et les exporter en CSV
server.get('/get_meetings', async (req, res) => {
    try {
      // Récupérer le token d'accès depuis le fichier .env
      const accessToken = process.env.MICROSOFT_GRAPH_ACCESS_TOKEN;
  
      // Définir l'URL de l'endpoint Microsoft Graph pour récupérer les réunions
      const graphApiUrl1 = 'https://graph.microsoft.com/v1.0/me/events?$select=subject,body,bodyPreview,organizer,attendees,start,end,location';
      const graphApiUrl = 'https://graph.microsoft.com/v1.0/me/events';
  
      // Faire une requête GET à l'API Microsoft Graph avec le token d'accès
      const response = await axios.get(graphApiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      // Récupérer les réunions en réponse
      const meetings = response.data.value;
  
      // Convertir les réunions en format CSV
      const csvData = meetings.map((meeting) => {
        return `${meeting.subject},${meeting.start.dateTime},${meeting.end.dateTime},${meeting.location.displayName}`;
      });
  
      // Ajouter l'en-tête CSV
      const csvHeader = 'Subject,Start Time,End Time,Location\n';
  
      // Concaténer l'en-tête et les données CSV
      const csvContent = csvHeader + csvData.join('\n');
  
      // Définir les en-têtes de la réponse pour indiquer un fichier CSV
      res.setHeader('Content-disposition', 'attachment; filename=meetings.csv');
      res.set('Content-Type', 'text/csv');
      res.status(200).send(csvContent);
    } catch (error) {
      console.error('Erreur lors de la récupération des réunions :', error.message);
      res.status(500).json({ error: 'Erreur lors de la récupération des réunions' });
    }
  });
  