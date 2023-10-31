const http = require("http");
//routes
const { listRoute } = require("./app/routes/index.routes");
//db
const { connectToDB } = require("./app/database/db.index");
//env config
const dotenv = require("dotenv");
dotenv.config();

//env
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

//db config
connectToDB(MONGO_URL)

//creating server
const server = http.createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");

  //routing
  listRoute(req, res, req.params);
});

//getting up server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
