const https = require('https');

// permet d'ajouter des crédits à un sous-compte
//Depuis votre compte, il vous est possible d’ajouter des crédits sur vos sous comptes. Les crédits seront débités de votre compte principal.
let data = JSON.stringify({
  apiKey: 'YOUR API KEY',
  credit: '100',
  tokenSubaccount: 'identifiant du sous-compte'
});

let options = {
  hostname: 'api.smspartner.fr',
  path: '/v1/subaccount/credit/add',
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
