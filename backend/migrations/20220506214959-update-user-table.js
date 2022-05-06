'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'User',
        'locationId',
        {
          type: Sequelize.DataTypes.INTEGER
        },
        { transaction }
      );
      await queryInterface.addIndex(
        'User',
        'locationId',
        {
          fields: 'locationId',
          unique: true,
          transaction,
        }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('User', 'locationId', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
