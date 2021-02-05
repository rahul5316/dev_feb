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
        processDetails(teamName, opponentTeam, batsmanName, runs, balls, fours, sixes, strikeRate);
    }

      

    }

    // console.log("##########################################################");
  }
}



function processDetails(teamName, opponentTeam, batsmanName, runs, balls, fours, sixes, strikeRate) {

  let teamPath = `./IPL/${teamName}`;
  let batsmanPath = `./IPL/${teamName}/${batsmanName}.json`;
  let isTeamFolder = checkTeamFolder(teamPath);

  if(isTeamFolder) {
    let isBatsman = checkBatsmanFile(batsmanPath);

    if(isBatsman) {
      updateBatsmanFile(batsmanPath, opponentTeam, runs, balls, fours, sixes, strikeRate);
    }
    else {
      createBatsmanFile(batsmanPath, opponentTeam, runs, balls, fours, sixes, strikeRate);
    }
  }
  else {
    createTeamFolder(teamPath);
    createBatsmanFile(batsmanPath, opponentTeam, runs, balls, fours, sixes, strikeRate);
  }

}



function checkTeamFolder(teamPath) {
  return fs.existsSync(teamPath);
}

function checkBatsmanFile(batsmanPath) {
  return fs.existsSync(batsmanPath);
}

function updateBatsmanFile(batsmanPath, opponentTeam, runs, balls, fours, sixes, strikeRate ) {

  let batsmanFile = fs.readFileSync(batsmanPath);

batsmanFile = JSON.parse(batsmanFile);

let inning = {
  Opponent : opponentTeam ,
  Runs : runs ,
  Balls : balls ,
  Fours : fours , 
  Sixes : sixes , 
  SR : strikeRate
}

batsmanFile.push(inning);
fs.writeFileSync(batsmanPath, JSON.stringify(batsmanFile));


}

function createBatsmanFile(batsmanPath , opponentTeam , runs , balls , fours , sixes , strikeRate) {

  let batsmanFile = [];
  let inning = {
    Opponent : opponentTeam ,
    Runs : runs ,
    Balls : balls ,
    Fours : fours , 
    Sixes : sixes , 
    SR : strikeRate
  };

  batsmanFile.push(inning);

  // Always stringfy if you want  to dump data to file in string format using fs.
  fs.writeFileSync(batsmanPath, JSON.stringify(batsmanFile));

}

function createTeamFolder(teamPath) {
  fs.mkdirSync(teamPath);
}

module.exports = getMatch;
