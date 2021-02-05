const request = require("request");
const fs = require("fs");
const cheerio = require ("cheerio");

function getAllMatches(link) {
  request(link, cb);
}


function cb(error, response, html){

  if(error == null) {
    processHtml(html);
  }
  else if(response.statusCode == "404"){
    console.log("Page not found");
  }
  else {
    console.log("error");
  }
}


function processHtml(html) {
  console.log("inside allMatches file")
}


//module.export is an inbuilt empty object inside node.js
// and module.export object is accessible anywhere


//module.exports.getAllMatches makes a getAllMatches key and we give the key a method called getAllMatches inside the node js environment

//the syntax below is used if we have multiple attrbutes 
// module.exports.getAllMatches = getAllMatches;

// console.log(module.exports);


// module.export is malliable. it can also become a fucntion if it wants to. example
// module.exports = getAllMatches. when we call this on homepage, it will directly give us the getAllmatches function

//single function

module.exports = getAllMatches;
