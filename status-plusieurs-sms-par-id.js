const https = require('https');

//Cette requête permet de récupérer les statuts de plusieurs SMS à partir d’un ID.

// Préparer les données pour la requête GET
let data = 'apiKey=YOUR_API_KEY&messageId=300';
let url = 'https://api.smspartner.fr/v1/bulk-status?' + data;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Erreur: " + err.message);
});
