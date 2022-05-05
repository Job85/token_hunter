'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wallet.init({
    seed_phrase: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    token_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};