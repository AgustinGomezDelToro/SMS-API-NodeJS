const https = require('https');

//Cette requête permet de récupérer les statuts de plusieurs SMS à partir d’un tag.
let data = 'apiKey=YOUR_API_KEY&tag=montag';
let url = 'https://api.smspartner.fr/v1/bulk-status-by-tag?' + data;

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
