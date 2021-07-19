const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Product = require("../models/Produtc");

const connection = new Sequelize(dbConfig);

Product.init(connection);

module.exports = connection;
