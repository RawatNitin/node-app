const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json",
    );

    fs.readFile(filePath, (err, data) => {
      let products;
      if (err) {
        products = [];
      } else {
        products = JSON.parse(data) || [];
      }
      products.push(this);

      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log("write file error");
      });
    });
  }

  static fetchAllProducts() {
    const filePath = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json",
    );

    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data) || []);
        }
      });
    });
  }
};
