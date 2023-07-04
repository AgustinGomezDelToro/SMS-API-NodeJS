const https = require('https');

// Préparer les données pour la requête POST
let data = JSON.stringify({
  apiKey: 'YOUR API KEY',
  phoneNumbers: '+336XXXXXXXX',
  // identifiant du sondage que vous avez créé dans votre compte SMS Partner
  sondageIdent: 'SONDAGE ID',
  scheduledDeliveryDate: '04/07/2023',
  time: 11,
  minute: 55 //tous les 5 minutes ex: 00, 05, 10, 15, 20, etc.
});

let options = {
  hostname: 'api.smspartner.fr',
  path: '/v1/sondage/to/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

let req = https.request(options, (res) => {
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

req.write(data);
req.end();
