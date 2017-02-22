'use strict';

module.exports = (sequelize, DataTypes) => {
  let models = sequelize.models;

  var Model = sequelize.define('sequelizemeta', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true 
    },
  }, {
    classMethods: {
      associate: () => {
      }
    },
    tableName: 'sequelizemeta',
    
    timestamps: false,
  });

  return Model;
};

