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
      // const Token = sequelize.define('token', { code: DataTypes.STRING })
      Token.belongsTo(models.Location)
      Token.belongsToMany(models.Wallet, {
        through: 'WalletTokens'
      })
    }
  }
  Token.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'location_id',
      onDelete: 'CASCADE',
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'wallet_id'
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Token',
    tableName: 'tokens'
  });
  return Token;
};