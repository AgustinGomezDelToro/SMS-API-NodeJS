const https = require('https');

// Préparer les données pour la requête GET
let data = 'apiKey=YOUR_API_KEY';
let url = 'https://api.smspartner.fr/v1/subaccount/list?' + data;

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
