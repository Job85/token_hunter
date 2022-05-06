'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'DemoEmail@email.com',
      hashedPassword: 'DemoPassword',
      walletId: 1,
      locationId: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }, {
      email: 'TestEmail@email.com',
      hashedPassword: 'TestPassword',
      walletId: 2,
      createdAt: new Date(),
      updateAt: new Date()
    }, {
      email: 'TrialEmail@email.com',
      hashedPassword: 'TestPassword',
      walletId: 3,
      createdAt: new Date(),
      updateAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
