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
      const Token = sequelize.define('token', { code: DataTypes.STRING })
      Token.belongsTo(models.Location, {
        foreignKey: 'locationId',
        as: 'location',
        onUpdate: 'CASCADE'
      })
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
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'wallets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Token',
    tableName: 'tokens'
  });
  return Token;
};