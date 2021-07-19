const Product = require("../models/Produtc");

module.exports = {
  //criar um produto
  async store(req, res) {
    const { name, price, quantity } = req.body;

    const product = await Product.create({ name, price, quantity });

    return res.json(product);
  },

  //Listar todos os produtos
  async index(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  },

  //Mostar produto pelo ID
  async indexId(req, res) {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    }

    return res.json(product);
  },

  //editar produto
  async editProduct(req, res) {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(400).json({ error: "Product not found" });
    } else {
      product.name = name;
      product.price = price;
      product.quantity = quantity;

      await product.save();
    }

    return res.status(200).json({ Message: "Product edited" });
  },

  //deletar produto
  async delete(req, res) {
    const id = req.params;
    await Product.destroy({ where: id });

    return res.status(200).json({ Message: "Product deleted" });
  },
};
