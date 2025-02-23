const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const cartController = require("../controllers/cart");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:id", shopController.getProductDetails);

router.get("/cart", cartController.getProductsFromCart);

router.post("/cart", cartController.postToCart);

router.post("/cart/delete-item", cartController.deleteItemFromCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
