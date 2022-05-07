'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('users', {
      fields: ['email'],
      type: 'UNIQUE',
      name: 'email'
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('users', 'email')
  }
};
