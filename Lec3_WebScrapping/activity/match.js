const request = require("request");
const fs = require("fs");
const cheerio = require ("cheerio");



function getMatch(link) {
  request(link, cb);
}

function cb(error, response, data) {
  processHtml(data);
}

function processHtml(html) {

  let ch = cheerio.load(html);

  let bothInningsDiv = ch(".card.content-block.match-scorecard-table .Collapsible");
  for(let i = 0; i<bothInningsDiv.length;i++) {
    
    let teamName = ch(bothInningsDiv[i]).find("h5").text();

    teamName = teamName.split("INNINGS")[0].trim();

    console.log(teamName);

    let allTrs = ch(bothInningsDiv[i]).find(".table.batsman tbody tr");


    for(let j=0; j<allTrs.length-1;j++) {

      let allTds = ch(allTrs[j]).find("td");

      if(allTds.length > 1){
        let batsmanName = ch(allTds[0]).text().trim();
        let runs = ch(allTds[2]).text().trim();
        let balls = ch(allTds[3]).text().trim();
        let fours = ch(allTds[5]).text().trim();
        let sixes = ch(allTds[6]).text().trim();
        let strikeRate = ch(allTds[7]).text().trim();
        console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`);
    }

      

    }

    console.log("##########################################################");
  }
}

module.exports = getMatch;
