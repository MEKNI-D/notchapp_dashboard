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
    /* Creates Categories table */
    queryInterface.createTable('categories', {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
    });
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

    console.log('successfully created tables');
  },

  down: function (queryInterface, Sequelize) {
       queryInterface.drop('users');
       queryInterface.drop('categories');
       queryInterface.drop('institutions');
  }
};
