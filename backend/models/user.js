'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Wallet, {
        foreignKey: 'walletId',
        as: 'wallet',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Location, {
        foreignKey: 'locationId',
        as: 'location',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordDigest:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'wallets',
        key: 'id'
      },
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'locations',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};