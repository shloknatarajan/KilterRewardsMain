const https = require('https');

let apidata = "";

https.get('https://apienterprise.kilterrewards.com/challenges/get/teamChallenges', (resp) => {

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    apidata += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(apidata)
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

module.exports.apidata = apidataarray;