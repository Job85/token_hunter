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
      Location.belongsTo(models.User)
      Location.hasMany(models.Token, {
        foreignKey: 'tokenId',
      })
    }
  }
  Location.init({
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: -90,
        max: 90
      }
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: -180,
        max: 180
      }
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
    validate: {
      bothCoordsOrNone() {
        if ((this.latitude === null) !== (this.longitude === null)) {
          throw new Error('Either both latitude and longitude, or neither!');
        }
      }
    },
    modelName: 'Location',
    tableName: 'locations'
  });
  return Location;
};