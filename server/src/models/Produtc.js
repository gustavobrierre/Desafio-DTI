const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        quantity: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Product;
