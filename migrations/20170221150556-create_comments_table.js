'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Creates Comments table */
    queryInterface.createTable('comments', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      text: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      institution: {
        type: Sequelize.INTEGER,
        references: {
          model: 'institutions',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
    console.log('successfully created table');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('comments');
  }
};
