'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seedPhrase1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seedPhrase2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seedPhrase3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seedPhrase4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seedPhrase5: {
        allowNull: false,
        type: Sequelize.STRING
      },
      seedPhrase6: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tokenId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wallets');
  }
};