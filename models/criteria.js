/**
 * Created by Donia on 14/02/2017.
 */
var db = require('../config/db');
var Sequelize = require('sequelize');
var Rating = require('./rating');
var Criteria = db.define('criteria', {
    name: {
        type: Sequelize.STRING,
        field: 'name' // Will result in an attribute that is called name in the database
    },
    description: {
        type: Sequelize.STRING,
        field: 'description' // Will result in an attribute that is called name in the database
    }
},{
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
        associate : function(Rating) {
            Criteria.hasMany(Rating);
        },
    }
});
/*Criteria.hasMany(Rating, { as : 'ratings' });*/
module.exports=Criteria;