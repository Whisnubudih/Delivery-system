'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.User,{foreignKey: "UserId"})
      Menu.hasMany(models.Order,{foreignKey: "MenuId"})
    }
  }
  Menu.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Status Required" },
      },
    },
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};