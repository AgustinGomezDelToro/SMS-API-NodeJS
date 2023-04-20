var http = require("http");
var options = {
  hostname: 'api.smspartner.fr',
  port: 443,
  path: '/v1/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',

    'cache-control': 'no-cache'
  }
};
var req = http.request(options, function (res) {
var chunks = [];
res.on("data", function (chunk) {
chunks.push(chunk);
});
res.on("end", function () {
var body = Buffer.concat(chunks);
console.log(body.toString());
});
});
req.write(JSON.stringify({ apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
phoneNumbers: '+336XXXXXXX', sender: 'demo',
gamme: 1, message: 'C\'est un message test' }));
req.end();