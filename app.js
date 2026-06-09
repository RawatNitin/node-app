const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopperRouter = require("./routes/shopper");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRouter);
app.use(shopperRouter);

app.listen(8080);
