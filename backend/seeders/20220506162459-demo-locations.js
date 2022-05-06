'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', [{
      latitude: 28.087692,
      longitude: -82.486329,
      diffLvl: 'Easy-Demo',
      userId: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }, {
      latitude: 27.963719,
      longitude: -82.435767,
      diffLvl: 'Medium-Demo',
      userId: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }, {
      latitude: 28.073568,
      longitude: -82.373926,
      diffLvl: 'Hard-Demo',
      userId: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }, {
      latitude: 28.088978,
      longitude: -82.404310,
      diffLvl: 'Medium-Demo',
      userId: 1,
      createdAt: new Date(),
      updateAt: new Date()
    }])
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
