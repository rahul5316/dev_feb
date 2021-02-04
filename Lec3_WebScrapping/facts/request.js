const request = require("request");
const fs = require("fs");
const cheerio = require ("cheerio");

let path = "https://www.espncricinfo.com/series/ipl-2020-21-1210595?ex_cid=ipl:google_cpc:search:dsa_feed:msn&gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv9Rs8fd2C4acynr86S0EO6AJyZTNnZ27Emy9fD7tTb7l_NOml7E9I4aAgKcEALw_wcB";

request(path, cb);

function cb(error, response, html) {
if(error == null) {
  processHTML(html);
}


else if(response.statusCode == "404") {
  console.group("Page not found");
}

else {
  console.log(error);
}
}


function processHTML(html) {

  let ch = cheerio.load(html);
  let aTage = ch();
}