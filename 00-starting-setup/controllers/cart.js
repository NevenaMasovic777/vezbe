const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getProductsFromCart = (req, res, next) => {
  Cart.fetchAll((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = { totalPrice: cart.totalPrice, products: [] };
      products.forEach((product) => {
        const productData = cart.products.find(
          (prod) => prod.id === product.id
        );
        if (productData) {
          cartProducts.products.push({
            productData: product,
            qty: productData.qty,
          });
        }
      });
      res.render("shop/cart", {
        pageTitle: "Your cart",
        path: "/cart",
        productsData: cartProducts,
      });
    });
  });
};

exports.postToCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

exports.deleteItemFromCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.deleteProduct(productId, +product.price);
    res.redirect("/cart");
  });
};
