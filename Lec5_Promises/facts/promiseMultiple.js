const fs = require("fs");


let f1KaPromise = fs.promises.readFile("../facts/f1.txt");

f1KaPromise.then(function(data){
  console.log(data+"");
});

let f2KaPromise = fs.promises.readFile("../facts/f2.txt");

f2KaPromise.then(function(data) {
  console.log(data+"");
})


let f3KaPromise = fs.promises.readFile("../facts/f3.txt");

f3KaPromise.then(function(data) {
  console.log(data+"");
})
