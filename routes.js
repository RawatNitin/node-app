const fs = require("fs");

const requestHandler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>`);
    res.write(`<head><title>Node App!</title></head>`);
    res.write(
      `<body><form action="/message" method="POST"><input name="message"/><button type="submit">Submit</button></form></body>`,
    );
    res.write(`</html>`);
    res.end();
    return;
  }
  if (url === "/message" && method === "POST") {
    const chunks = [];
    req.on("data", (chunk) => {
      chunks.push(chunk);
    });
    req.on("end", () => {
      const parsedData = Buffer.concat(chunks).toString();
      const message = parsedData.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) console.error(err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
    return;
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>`);
  res.write(`<head><title>Node App!</title></head>`);
  res.write(`<body><h1>My node app!</h1></body>`);
  res.write(`</html>`);
  res.end();
};

exports.routes = requestHandler;
