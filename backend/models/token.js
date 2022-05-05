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
      Token.belongsTo(models.Location, {
        foreignKey: 'locationId',
        as: 'location',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Token.belongsToMany(models.Wallet, {
        foreignKey: 'walletId',
        as: 'wallet',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
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
      allowNull: false,
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wallets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Token',
    tableName: 'tokens'
  });
  return Token;
};