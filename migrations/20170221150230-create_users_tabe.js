'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Creates Users table */
    queryInterface.createTable('users', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      phoneNumber: Sequelize.INTEGER,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.drop('users');
  }
};
