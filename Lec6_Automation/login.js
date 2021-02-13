const puppeteer = require("puppeteer");


let browserOpenPromise = puppeteer.launch({

  headless: false,
  defaultViewport : null // page size reset
});
//Gives us a promise that it will open the browser
//Headless:false shows us the browser opening.n if we don't write it, it will still work but it won't be visible to us
console.log(browserOpenPromise);

browserOpenPromise.then(function(browser){
  let pagesPromise = browser.pages();
  return pagesPromise;
  //gives us the promise of how many pages are open
})
.then(function(pages){
  let page = pages[0];
  let pageOpenPromise = page.goto("https://www.google.com");
  return pageOpenPromise;
})
.then(function(){
  console.log("Google Opened");
})
