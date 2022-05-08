'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'DemoUser@email.com',
      passwordDigest: 'unhashedPassword',
      walletId: null,
      locationId: null
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
