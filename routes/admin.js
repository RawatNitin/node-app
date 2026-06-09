const express = require("express");

const router = express.Router();

// In case of app.use or router.use req.url should start with whatever path is there in the middleware
// In case of post, put, get, patch and other methods, methods it does exact match
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
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

module.exports = router;
