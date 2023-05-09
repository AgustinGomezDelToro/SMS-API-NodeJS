const https = require("https");

// Remplacez par votre clé API et autres données
const apiKey = "VOTRE_CLÉ_API";
const messageId = "300";
const phoneNumber = "06xxxxxxxx";

// Préparer les données pour la requête GET
const data = `apiKey=${apiKey}&messageId=${messageId}&phoneNumber=${phoneNumber}`;

// Définir les options pour la requête HTTP GET vers l'API SMS Partner
const options = {
  hostname: "api.smspartner.fr",
  port: 443,
  path: `/v1/message-status?${data}`,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache",
  },
};

// Effectuer la requête HTTP GET avec les options et données définies précédemment
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  // Afficher les données de réponse de l'API sur la sortie standard
  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

// Afficher en cas d'erreur lors de l'exécution de la requête HTTP GET
req.on("error", (error) => {
  console.error(error);
});

// Terminer la requête HTTP GET
req.end();
