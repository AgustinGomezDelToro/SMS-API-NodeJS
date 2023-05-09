const https = require('https');

// Remplacez par votre clé API
const apiKey = 'VOTRE_CLÉ_API';

// Objet JSON qui contient les informations nécessaires pour envoyer les SMS en lots
const data = JSON.stringify({
    apiKey: apiKey,
    sender: 'mycompany',
    scheduledDeliveryDate: '21/10/2014',
    time: 9,
    minute: 0,
    SMSList: [
        {
            phoneNumber: '06xxxxxxx1',
            message: 'msg 0',
        },
        {
            phoneNumber: '06xxxxxxx2',
            message: 'msg 1',
        },
    ],
});

// Définir les options pour la requête HTTP POST vers l'API SMS Partner
const options = {
    hostname: 'api.smspartner.fr',
    port: 443,
    path: '/v1/bulk-send',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'cache-control': 'no-cache',
    },
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
