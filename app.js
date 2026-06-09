const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopperRouter = require("./routes/shopper");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopperRouter);

// If any path was not matched, request reached here
app.use((req, res) => {
  res.status(400).send(`<html><h1>Pagenotfound!! 404!!</h1></html>`);
});

app.listen(8080);
