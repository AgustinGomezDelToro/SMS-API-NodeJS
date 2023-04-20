const https = require('https');

const data = JSON.stringify({
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    phoneNumbers: '+33*********',
    sender: 'demo',
    gamme: 1,
    message: "Cest un message test NodeJS"
});

const options = {
  hostname: 'api.smspartner.fr',
  port: 443,
  path: '/v1/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'cache-control': 'no-cache'
  }
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
