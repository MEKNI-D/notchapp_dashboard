'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Creates Criteria table */
    queryInterface.createTable('criteria', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('criteria');
  }
};
