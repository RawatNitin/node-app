const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("req in middleware");
  next(); //Allows the request to continue the next middleware in line
});

app.use((req, res, next) => {
  console.log("req in middleware");
  res.send(`<html><h1>Response from HTML!!</h1></html>`);
});

app.listen(8080);
