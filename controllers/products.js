const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.fetchAllProducts();
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products?.length > 0,
      activeShop: true,
      productCSS: true,
    });
  } catch (e) {
    res.render("shop", {
      prods: [],
      pageTitle: "Shop",
      path: "/",
      hasProducts: false,
      activeShop: true,
      productCSS: true,
    });
  }
};

exports.exports = exports;
