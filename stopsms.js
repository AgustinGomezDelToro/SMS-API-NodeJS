const https = require('https');

const apiKey = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

const options = {
  hostname: 'api.smspartner.fr',
  port: 443,
  path: `/v1/stop-sms/list?apiKey=${apiKey}`,
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk;
  });

  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      // Process your response here
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
