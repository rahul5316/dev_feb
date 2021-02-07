const request = require("request");
const fs = require("fs");
const cheerio = require ("cheerio");

let lb = [];

let count = 0;

function getMatch(link) {
  console.log("Sending Request!!");
  count++;
  request(link, cb);
}

function cb(error, response, data) {
  count--;
  console.log("Received Data");
  processHtml(data);

  if(count ==0) {
    console.table(lb);
  }

}

function processHtml(html) {

 let ch = cheerio.load(html);

  let bothInningsDiv = ch(".card.content-block.match-scorecard-table .Collapsible");
  for(let i = 0; i<bothInningsDiv.length;i++) {
    
    let teamName = ch(bothInningsDiv[i]).find("h5").text();
    let opponentTeam = ch(bothInningsDiv[ i == 0 ? 1 : 0]).find("h5").text().split("INNINGS")[0].trim();

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
        // console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`);
        processLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes, strikeRate);
    }

      

    }

    // console.log("##########################################################");
  }
}



function processLeaderBoard(teamName, batsmanName, runs, balls, fours, sixes, strikeRate) {

  runs = Number(runs);
  balls = Number(balls);
  fours = Number(fours);
  sixes = Number(sixes);

  for(let i =0; i<lb.length; i++ ) {

    let inning = lb[i];

    if(inning.Team == teamName && inning.Name == batsmanName) {
      inning.Runs+= runs;
      inning.Balls += balls;
      inning.Fours += fours;
      inning.Sixes += sixes;
      return;
    }
  }
     // when the batsman has came for the first time in this IPL
  let inning = {
    Team : teamName ,
    Name : batsmanName ,
    Runs : runs ,
    Balls : balls ,
    Fours : fours , 
    Sixes : sixes
  }
  lb.push(inning);
  

}

module.exports = getMatch;
