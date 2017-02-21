/**
 * Created by Donia on 15/02/2017.
 */
var Sequelize = require('sequelize');
var Institution = require('./institution');
var db = require('../config/db');
var Comment = db.define('comment', {
    text: {
        type: Sequelize.TEXT,
        field: 'text'
    },
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
     associate : function(Institution) {
     Comment.belongsTo(Institution);
     },
     }
});
//Comment.belongsTo(Institution, { as : 'institution' });
module.exports=Comment;