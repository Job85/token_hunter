'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', [{
      latitude: 28.087692,
      longitude: -82.486329,
      diffLvl: 'Easy-Demo',
      userId: 1,
      tokenId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
