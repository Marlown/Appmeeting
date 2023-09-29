// src/services/microsoftGraphService.js
const { Client } = require('@microsoft/microsoft-graph-client');

// Créez une instance du client Microsoft Graph
const client = Client.init({
  authProvider: (done) => {
    // Obtenez un jeton d'accès OAuth2 ici (via un flux d'authentification (directement via les autoristaion ))
    const accessToken = 'Votre jeton d\'accès';
    done(null, accessToken);
  },
});

// Exemple pour récupérer les réunions de l'utilisateur
async function getMeetings() {
  try {
    const meetings = await client.api('/me/events')
      .filter("isOnlineMeeting eq true")
      .select('subject,start,end,onlineMeeting')
      .get();

    console.log('Réunions récupérées :', meetings.value);
  } catch (error) {
    console.error('Erreur lors de la récupération des réunions :', error);
  }
}

export { getMeetings };
