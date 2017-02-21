/**
 * Created by Donia on 14/02/2017.
 */
var db = require('../config/db');
var Sequelize = require('sequelize');
var Institution = require('./institution');
var Criteria = require('./criteria');
var Rating = db.define('rating', {
    value: {
        type: Sequelize.FLOAT,
        field: 'value'
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description'
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
        associate : function(Institution) {
            Rating.belongsTo(Institution, { as : 'institution' });
            Rating.belongsTo(Criteria, { as : 'criteria' });
        },
    }
});
/*Rating.belongsTo(Institution, { as : 'institution' });
Rating.belongsTo(Criteria, { as : 'criteria' });*/
module.exports=Rating;