'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokenWallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TokenWallet.init({
    walletId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'wallets',
        key: 'id'
      }
    },
    tokenId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'tokens',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'TokenWallet',
    tableName: 'token_wallets'
  });
  return TokenWallet;
};