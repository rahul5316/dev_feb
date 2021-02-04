console.log("hello world");


var fk = 99;
console.log(fk);


if(true){
  const a = 10;
  if(true){
        if(true){
          console.log(a);
        }
  }
}



var a;

console.log(a);

//this is a 2d array

// elements in  an array doesn't have to be of one typr
let names = ["rk","ri", "ys",22, 't', 99, false["tt", "gg", "pp"]];


//Objects
//you can define objects either like this
// let obj = new Object();
// obj.name = "rahul";
// obj.age = 20;


//Better way to define an object in javascript

let obj = {

  name:"debruyne",
  "skills": ["martial arts","taewkondo"],
  place : "queens"
  //name, skills, places are all key value pairs
  //key value pairs can be string, function, anything
};

let key = "name";

console.log(obj["name"]);
// obj["name"] will go to the obj object and look for the name key value pair and print whatever there is

//to override key value pairs
obj.name = "aubamiyang";
console.log(obj["name"]);
//if key value pair exists, it will override it, otherwise it will create a new key value pair and give it the value 

//changes made to this file.

