'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{foreignKey: "UserId"})
      Order.belongsTo(models.Menu,{foreignKey: "MenuId"})
      
    }
  }
  Order.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    noTable: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: "no Table Required" },
      },
    },
    noOrder: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "no Order Required" },
      },
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: { msg: "date Required" },
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "status Required" },
      },
    },
    UserId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};