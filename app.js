const http = require("http");
const requestHandler = require("./routes");

const server = http.createServer(requestHandler.routes);

server.listen(8080);
