const { indexController } = require("../controllers/index.controllers.js");

const indexRoute = (req,res,route,method) => {
    if(route !== "/") return

    res.write("Index Route | Server Running!\n\n")
    res.write("Waiting data...")
    indexController(req,res,method)

    res.end()
}

module.exports = {indexRoute};
