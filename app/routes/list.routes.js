const { listController } = require("../controllers/index.controllers");

const listRoute = async (req, res, params) => {
    if(req.url === `/api/v1/location/${params}` && req.method === "GET") {
        const data = await listController(params);
    res.write(data);
    res.end();
    }
}

module.exports = listRoute