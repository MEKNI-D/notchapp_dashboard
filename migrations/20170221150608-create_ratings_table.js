'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Creates Ratings table */
    queryInterface.createTable('ratings', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      value: Sequelize.FLOAT,
      description: Sequelize.TEXT,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      criteria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'criteria',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('ratings');
  }
};
