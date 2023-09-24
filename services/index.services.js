const http = require("http");

const wheatherServices = {
  readAllCountryWheater,
  readWheaterByCountry,
  createCountryRegistry,
  updateCountryRegistry,
  deleteCountryRegistry,
};

//get registries from db
function readAllCountryWheater() {
  
}

//get registries from db by id
function readWheaterByCountry(id) {
  
}

//creates new registry getting data from scraping
function createCountryRegistry(country) {

}

//updates a existing registry comparing data from scraping 
function updateCountryRegistry(id) {

}

//deletes a registry from db
function deleteCountryRegistry(id) {

}

module.exports = wheatherServices
