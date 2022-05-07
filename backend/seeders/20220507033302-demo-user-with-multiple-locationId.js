'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      email: 'DemoEmail@email.com',
      hashedPassword: 'DemoPassword',
      walletId: 1,
      locationId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'DemoEmail@email.com',
      hashedPassword: 'DemoPassword',
      walletId: 1,
      locationId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      email: 'DemoEmail@email.com',
      hashedPassword: 'DemoPassword',
      walletId: 1,
      locationId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
