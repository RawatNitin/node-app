const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const path = require("path");
const rootPath = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

// If any path was not matched, request reached here
app.use((req, res) => {
  res.status(400).sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(8080);
