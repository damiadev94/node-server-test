const http = require("http");
const ps = require("../services/puppeteer.services");

const indexController = (req,res,method) => {
  const country = req.url;

  if (method === "GET") {
    ps.scrapeWheaterByCountry(country)
  } else if (method === "POST") {
  } else if (method === "PUT") {
  } else if (method === "DELETE") {
  }
};

module.exports = { indexController };
