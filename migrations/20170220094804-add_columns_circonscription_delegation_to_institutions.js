'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'institutions',
        'circonscription',
        Sequelize.STRING
    );
    queryInterface.addColumn(
        'institutions',
        'delegation',
        Sequelize.STRING
    );
  },

  down: function (queryInterface, Sequelize) {

  }
};
