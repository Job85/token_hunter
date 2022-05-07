'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('user', 'hashedPassword', 'passwordDigest')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn('users', 'passwordDigest', 'hashedPassword')
  }
};
