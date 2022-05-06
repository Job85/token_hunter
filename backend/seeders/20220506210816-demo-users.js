'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'DemoEmail@email.com',
      hashedPassword: 'DemoPassword',
      walletId: 1,
      locationId: 1
    }, {
      email: 'TestEmail@email.com',
      hashedPassword: 'TestPassword',
      walletId: 2,
      locationId: 0
    }, {
      email: 'TrialEmail@email.com',
      hashedPassword: 'TestPassword',
      walletId: 3,
      locationId: 0
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
