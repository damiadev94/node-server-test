const pptr = require("puppeteer")

async function scrapingService(url, model){
    const browser = await pptr.launch({headless:"new"});
    const page = await browser.newPage();

    await page.goto(url)

    const result = {}

    for (key in model){
        const data = page.$eval(model[key], element => element.textContent)
        result[key] = data
    }

    return data;
}

module.exports = scrapingService

