const puppeteer = require("puppeteer");

//
async function extract(url, object) {
  const browser = puppeteer.launch({ headless: "new" });
  const page = browser.newPage();

  await page.goto(url);

  const model = {}

  for (property in object) {
    const pageData = await page.$eval(object[property], (element) => element.textContent)
    model[property] = pageData 
  }
  
  return model;
}

/*
example:
extract(process.env.URL,{
  temp: "#wob_tm",
  max: "#wob_dp .wNE31c .gNCp2e span",
  min: "#wob_dp .wNE31c .QrNVmd span",
  rainPrecipitation: "#wob_pp",
  weatness: "#wob_hm",
  wind: "#wob_ws"
})
*/

module.exports = {extract}
