'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tokens', [{
      code: 'D3M0 C0D3',
      locationId: 1,
      walletId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'T3$T C0D3',
      locationId: 2,
      walletId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: '3V47 C0D3',
      locationId: 3,
      walletId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'D3M0 C0D3',
      locationId: 1,
      walletId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'T3$T C0D3',
      locationId: 2,
      walletId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'D3M0 C0D3',
      locationId: 1,
      walletId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
