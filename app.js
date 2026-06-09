const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// req.url shold start with whatever path is there in the middleware
app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/add-product", (req, res, next) => {
  res.send(
    `<html>
        <head><title>Add Product</title></head>
        <h1>Add Product</h1>
        <form action="/product" method="POST">
        <input type="text" name="product"/>
        <button type="submit">Add Product</button>
        </form>
        </html>`,
  );
});

app.use("/", (req, res, next) => {
  res.send(
    `<html>
              <head><title>Express!!</title></head>
              <h1>Express Home Page!! </h1>
              </html>`,
  );
});

app.listen(8080);
