/**
 * Created by Donia on 14/02/2017.
 */
var db = require('../config/db')
var Sequelize = require('sequelize');
var Category = require('./category');
var Rating = require('./rating');
var Comment = require('./comment');
var Institution = db.define('institution', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    address: {
        type: Sequelize.STRING,
        field: 'address'
    },
    city: {
        type: Sequelize.STRING,
        field: 'city'
    },
    longitude: {
        type: Sequelize.FLOAT,
        field: 'longitude'
    },
    latitude: {
        type: Sequelize.FLOAT,
        field: 'latitude'
    },
    circonscription: {
        type: Sequelize.STRING,
        field: 'circonscription'
    },
    delegation: {
        type: Sequelize.STRING,
        field: 'delegation'
    },
    category : {
        type: Sequelize.INTEGER,
        field: 'category',
    }
    /*,
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt' // Will result in an attribute that is called lat in the database
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt' // Will result in an attribute that is called lat in the database
    }*/
}, {
    //freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
     associate : function(Rating, Comment) {
     Institution.hasMany(Rating);
     Institution.hasMany(Comment);
     Institution.belongsTo(Category);
     },
     }
});
/*Institution.belongsTo(Category, { as : 'category' });
Institution.hasMany(Rating, { as : 'ratings' });
Institution.hasMany(Comment, { as : 'comments' });*/
module.exports=Institution;