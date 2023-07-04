const https = require('https');

// ce code permet d'ajouter un numéro à la liste des numéros stop SMS
let data = JSON.stringify({
  apiKey: 'VOTRE_API_KEY',
  phoneNumber: '+336XXXXXXXX',
});

let options = {
  hostname: 'api.smspartner.fr',
  path: '/v1/stop-sms/add',
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
  console.log("Error: " + err.message);
});

req.write(data);
req.end();
