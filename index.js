const http = require("http");
const { indexRoute } = require("./routes/index.routes");

const port = process.env.PORT || 3000;

//creating server
const server = http.createServer( async (req, res) => {
  const route = req.url;
  const method = req.method;

  //routing
  indexRoute(req,res,route,method)
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
