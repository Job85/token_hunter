'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Location.hasMany(models.Token, {
        foreignKey: 'tokenId',
        as: 'token',
        through: models.TokenLocation,
        foreignKeyConstraint: 'tokenId'
      })
    }
  }
  Location.init({
    sequelize,
    paranoid: true,
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    diffLvl: {
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
      }
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations'
  });
  return Location;
};