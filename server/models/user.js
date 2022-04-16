'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order,{foreignKey: "UserId"})
      User.hasMany(models.Menu,{foreignKey: "UserId"})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    email:{
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: { msg: "email already exist" },
      validate: {
        notNull: { msg: "email Required" },
        notEmpty: { msg: "email cannot be empty" },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Password Required" },
        notEmpty: { msg: "Password cannot be empty" },
      },
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "role Required" },
      },
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {

        let salt = bcrypt.genSaltSync(8);
        let hash = bcrypt.hashSync(instance.password, salt);

        instance.password = hash
      }
    },
    modelName: 'User',
  });
  return User;
};