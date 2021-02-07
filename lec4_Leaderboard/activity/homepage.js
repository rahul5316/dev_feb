const request  = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");
//module.export is accessble anywhere so the command below calls the module.exports from the allMatches class.
//The syntax state that the module.expot gets the getAllMatches key of module.export

// if we had writtern let obj = require("./allMatches") it would have brought the entire module.object with all the keys
// const {getAllMatches} = require("./allMatches");

//module.exports is an object by default but we can change it if we want it to




let path = "https://www.espncricinfo.com/series/ipl-2020-21-1210595?ex_cid=ipl:google_cpc:search:dsa_feed:msn&gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv9Rs8fd2C4acynr86S0EO6AJyZTNnZ27Emy9fD7tTb7l_NOml7E9I4aAgKcEALw_wcB";


// request always takes two arguments. path and callback function 
request(path, cb);

//the calback function that is passed inside the request function always has 3 arguments. error, response and html

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
  let ch = cheerio.load(html);

  // we needed the a tag of that list item
  let aTag = ch(".widget-items.cta-link a");
  //atag.attr() is basically passing whatever attribute we need of thatatag 
  let link = aTag.attr("href");
  let completeLink = "https://www.espncricinfo.com"+link;
  //console.log(completeLink);

 getAllMatches(completeLink);

  
}