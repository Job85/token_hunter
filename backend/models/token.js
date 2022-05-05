'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Token.init({
    sequelize,
    paranoid: true,
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Token',
    tableName: 'tokens'
  });
  return Token;
};