const {listingServices} = require("../services/index.services")

async function getlist(params){
    const data = await listingServices
    .read(params)
    .then(data => {
        return data;
    })
    .catch(err => console.log(err))
    return data;
}

module.exports = getlist;