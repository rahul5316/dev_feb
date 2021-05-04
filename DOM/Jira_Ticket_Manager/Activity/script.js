
let allFilters = document.querySelectorAll(" .ticket-filter div"); // gives all the divs inside ticket-filter


let filterCodes = {
  
  "pink":"#8e44ad",
  "blue":"#3498db",
  "black":"#2c3e50",
  "green":"#2ecc71"
}
let ticketContainer = document.querySelector(".tickets-container");

for(let i =0; i<allFilters.length;i++) {
  allFilters[i].addEventListener("click",chooseFilter);
}

function chooseFilter(e){
  //console.log(e);
  let filter = e.target.classList[1];//gets whatever color was clicked. goes to target where target is and then classList which has the events.
  let filterCode = filterCodes[filter];//finds the code of that colour from above
  ticketContainer.style.background = filterCode;//sets the background to this certain color
}