/**
 * Created by Donia on 14/02/2017.
 */
var Sequelize = require('sequelize');
var db = require('../config/db');
var Institution = require('./institution');
var Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    }
}, {
    //freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
        associate : function(Institution) {
            Category.hasMany(Institution);

        },
    }
});
//Category.hasMany(Institution, { as : 'institutions' });
module.exports=Category;