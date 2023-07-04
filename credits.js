const https = require('https');

// Préparer les données pour la requête GET
let data = 'apiKey=9d508bc26ea3e9a4673b4faf66940e4b7e8fcdef';
let url = 'https://api.smspartner.fr/v1/me?' + data;

https.get(url, (res) => {
  let data = '';

  // Un morceau de données a été reçu.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // La totalité de la réponse a été reçue. Imprimer le résultat.
  res.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  // Un message d'erreur sera imprimé en cas d'erreur.
  console.log("Erreur: " + err.message);
});
