// const fs = require("fs");


// let f1KaPromise = fs.promises.readFile("../facts/f1.txt");


// f1KaPromise.then(function(data) {
//   console.log(data+"");
//   let f2kaData = fs.promises.readFile("../facts/f2.txt")
//   return f2kaData;
// })
// .then(function(data){
//   console.log(data+"");
//   let f3kaData = fs.promises.readFile("../facts/f3.txt");
//   return f3kaData;
// })
// .then(function(data) {
//   console.log(data+"");
// })

const fs = require("fs");

let f1p = fs.promises.readFile("../facts/f1.txt");

f1p.then(function(data){
  console.log(data+"");
  let f2p = fs.promises.readFile("../facts/f2.txt");
  return f2p;
})
.then(function(data) {
  console.log(data+"");
  
})
