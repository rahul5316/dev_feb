const puppeteer = require("puppeteer");

const id = "nesoj95112@wedbo.net";
const pw = "123456789";
let browserOpenPromise = puppeteer.launch({

  headless: false,
  defaultViewport: null // page size reset
});
//Gives us a promise that it will open the browser
//Headless:false shows us the browser opening.n if we don't write it, it will still work but it won't be visible to us
console.log(browserOpenPromise);

browserOpenPromise.then(function (browser) {
  let pagesPromise = browser.pages();
  return pagesPromise;
  //gives us the promise of how many pages are open
})
  .then(function (pages) {
    let page = pages[0];
    tab = page;
    let pageOpenPromise = page.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
  })
  .then(function () {
    let idTypedPromise = tab.type("#input-1", id);
    return idTypedPromise;
  })
  .then(function () {
    let pwTypedPromise = tab.type("#input-2", pw);
    return pwTypedPromise;
  })
  .then(function () {
    let loginPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginPromise;
  })
  .then(function () {
    // wait for this selector until it is visible on dom
    let waitPromise = tab.waitForSelector('#base-card-1-link', { visible: true });
    return waitPromise;
    //Promise<Pending>
  })
  .then(function () {
    let ipClickPromise = tab.click('#base-card-1-link');
    return ipClickPromise;

  })
  .then(function () {
    let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]', { visible: true });
    return waitPromise;
  })
  .then(function(){
    let warmupClicked = tab.click('a[data-attr1="warmup"]',{visible:true});
    return warmupClicked;
})
.then(function () {
  let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item', { visible: true });
  return waitPromise;
})

  .then(function () {
    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item', {visible:true});
    //tab.$$ makes an array and pushes all the a tags in it.
    return allATagsPromise;
  })
  .then(function (allATags) {
    // now we need to extract href tags from all the a tags we have in allATagsPromise
    console.log(allATags);

    let allLinksPromise = [];

    for (let i = 0; i < allATags.length; i++) {
      let promiseLink = tab.evaluate(function (elem) { return elem.getAttribute("href") }, allATags[i]);
      allLinksPromise.push(promiseLink);
    }
    // now till here we have all the href links inside allLinksPromise array
    let pendingPromise = Promise.all(allLinksPromise);
    //we didn't use an array to get href links out of allLinksPromise because it will make a promise hell
    return pendingPromise;
  })

  .then(function (allLinks) {
    console.log(allLinks);
  })
  .catch(function(error){
    console.log("error");
  })

  // function waitAndClick(selector) {
         
  //   return new Promise(function(resolve, reject) {
  //     // resolve will call the scb
  //     //reject will call fcb;
  //     let waitPromise()
  //   })
  // }
