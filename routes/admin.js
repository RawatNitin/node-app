const express = require("express");
const router = express.Router();
const path = require("path");
const rootPath = require("../utils/path");

// In case of app.use or router.use req.url should start with whatever path is there in the middleware
// In case of post, put, get, patch and other methods, methods it does exact match
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

module.exports = router;
