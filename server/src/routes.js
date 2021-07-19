const express = require("express");
const ProductController = require("./controllers/ProductController");

const routes = express.Router();

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.indexId);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.editProduct);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes;
