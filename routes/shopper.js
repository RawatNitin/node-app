const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    `<html>
      <head><title>Express!!</title></head>
      <h1>Express Home Page!! </h1>
      </html>`,
  );
});

module.exports = router;
