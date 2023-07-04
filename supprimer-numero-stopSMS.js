const https = require('https');

let data = 'apiKey=your-api-key&id=333';
let url = 'https://api.smspartner.fr/v1/stop-sms/delete?' + data;

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
