/**
 * Created by Donia on 15/02/2017.
 */
var Sequelize = require('sequelize');
var db = require('../config/db')
var User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is called first_name in the database
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name' // Will result in an attribute that is called last_name in the database
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    phoneNumber: {
        type: Sequelize.INTEGER,
        field: 'phone_number' // Will result in an attribute that is called phone_number in the database
    },
    address: {
        type: Sequelize.STRING,
        field: 'address'
    },
    city: {
        type: Sequelize.STRING,
        field: 'city'
    },
    indexes : [
        {
            unique: true,
            fields: ['email']// Create a unique index on email
        }
    ]
}, {
    freezeTableName: true // Model tableName will be the same as the model name
});
module.exports=User;