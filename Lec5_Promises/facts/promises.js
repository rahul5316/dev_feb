let fs = require("fs");




// 1. => initial state of promise is pending Promise<Pending>
// 2. => pending state Promise<Pending> => then function => Promise<Data>
// 3. => Promise<Pending> => catch function => Promise<error>

// reading file in async way using callbacks
// fs.readFile("filepath" , function(error , data){
// 
// })

let pendingPromise = fs.promises.readFile("../facts/f1.txt");
console.log(pendingPromise);


// then ki call me jo function hai it is knows success callback
//pp.then() => attaches a scb to pending promise !!!


pendingPromise.then(function(data) {

  console.log("Inside then");
  console.log(pendingPromise);
  console.log(data);
  console.log(data+"");

});



// catch ki call me jo function hai it is knows as failure callback
// pp.catch() => attaches a fcb to pending promise !!!
pendingPromise.catch(function(error){

  console.log("Inside catch");
  console.log(pendingPromise);
});