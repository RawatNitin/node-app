const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use(shopRouter);

// If any path was not matched, request reached here
app.use((req, res) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8080);
