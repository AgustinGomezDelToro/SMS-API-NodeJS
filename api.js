// Importer le module 'https' de Node.js
const https = require('https');

// Objet JSON qui contient les informations nécessaires pour envoyer le SMS
const data = JSON.stringify({
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', //remplacez par votre clé API
    phoneNumbers: '+336XXXXXXXX',  //remplacez par votre numéro de téléphone
    sender: 'NodeJS',
    gamme: 1,
    message: "Cest un message test NodeJS" //remplacez par votre message
});

// Définir les options pour la requête HTTP POST vers l'API SMS Partner
const options = {
  hostname: 'api.smspartner.fr',
  port: 443,
  path: '/v1/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'cache-control': 'no-cache',
    'webhookUrl': 'https://webhook.site/TOKEN' // Webhook URL *cette ligne est optionnel*
  }
};

// Demande HTTP POST avec les options et les données définies précédemment
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  
  // Afficher les données de réponse de l'API sur la sortie standard
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

// Affichage en cas d'erreur lors de l'exécution de la requête HTTP POST
req.on('error', (error) => {
  console.error(error);
});

// Envoyer les données de l'objet 'data' à la demande
req.write(data);
// Terminer la demande HTTP POST
req.end();
