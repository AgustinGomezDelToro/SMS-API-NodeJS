const https = require("https");

// Remplacez par votre clé API
const apiKey = "VOTRE_CLÉ_API";

// Préparer les données pour la requête POST
const data = JSON.stringify({
  apiKey: apiKey,
  to: "336xxxxxxxx",
  from: "336xxxxxxxx",
  message: "Ceci est votre message",
});

// Définir les options pour la requête HTTP POST vers l'API SMS Partner
const options = {
  hostname: "api.smspartner.fr",
  port: 443,
  path: "/v1/vn/send",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
    "cache-control": "no-cache",
  },
};

// Effectuer la requête HTTP POST avec les options et données définies précédemment
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  // Afficher les données de réponse de l'API sur la sortie standard
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

// Afficher en cas d'erreur lors de l'exécution de la requête HTTP POST
req.on("error", (error) => {
  console.error(error);
});

// Envoyer les données de l'objet 'data' à la demande
req.write(data);
// Terminer la demande HTTP POST
req.end();
