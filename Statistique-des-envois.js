const https = require('https');

let apiKey = 'YOUR_API_KEY';
let url = `https://api.smspartner.fr/v1/statistics/cost-resume?apiKey=${apiKey}&interval=last_twelve_months`; // 12 derniers mois
//interval=last_month // 1 dernier mois
//interval=custom&from=21-10-2022&to=21-10-2022 // intervalle personnalisé

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
