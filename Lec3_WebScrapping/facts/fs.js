const  fs = require("fs");

const cheerio = require("cheerio");

let htmldata = fs.readFileSync("../activity/index.html");


let ch = cheerio.load(htmldata);

//console.log(ch);


// use (#)id if the tag associated has if
// use ().)class if the tag associated has class
//.text() is used to read the text of tha particular tag otherwise t will give you the full html
// So .text() is very importan to read text
let outerh1 = ch("#unique").text();
console.log(outerh1);



