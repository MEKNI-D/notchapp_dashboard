'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Creates Categories table */
    queryInterface.createTable('categories', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.drop('categories');
  }
};
