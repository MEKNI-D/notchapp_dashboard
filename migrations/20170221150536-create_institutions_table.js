'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /* Institutions table */
    queryInterface.createTable('institutions', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      longitude : Sequelize.FLOAT,
      latitude : Sequelize.FLOAT,
      circoscription: Sequelize.STRING,
      delegation: Sequelize.STRING,
      category: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.drop('institutions');
  }
};
