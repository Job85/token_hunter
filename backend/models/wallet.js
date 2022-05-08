'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wallet.hasMany(models.Token, {
        foreignKey: 'tokenId',
        as: 'token',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Wallet.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Wallet.init({
    seedPhrase1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seedPhrase2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seedPhrase3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seedPhrase4: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seedPhrase5: {
      type: DataTypes.STRING,
      allowNull: false
    },
    seedPhrase6: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      },
    },
    tokenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'tokens',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Wallet',
    tableName: 'wallets'
  });
  return Wallet;
};