const puppeteer = require("puppeteer");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const url = process.env.SCRAPE_URL;

//scrape country wheater data from web
async function scrapeWheaterByCountry(country) {
  const browser = await puppeteer.launch({headless:"new"});
  const page = await browser.newPage();

  // await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, {waitUntil:"domcontentloaded"});
  const content = await page.$eval("#WxuCurrentConditions-main-b3094163-ef75-4558-8d9a-e35e6b9b1034", div => div.innerHTML)

  if(content) {
    console.log("content loaded!")
  }
  await browser.close()
}

async function takeScreenshotCountry(country) {
  //creates browser
  const browser = await puppeteer.launch({headless:"new"});
  const page = await browser.newPage();

  //creates page and go to
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, {waitUntil:"domcontentloaded"});

  //take screenshot
  await page.screenshot({
    fullPage: true,
    path: "screenshot.jpeg"
  });

  await browser.close();
}

module.exports = { scrapeWheaterByCountry, takeScreenshotCountry };
