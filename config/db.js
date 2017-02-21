/**
 * Created by Donia on 14/02/2017.
 */
require('dotenv').config();
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
    process.env.DB_REMOTE_DATABASE,
    process.env.DB_REMOTE_USERNAME,
    process.env.DB_REMOTE_PASSWORD,
    {
        host: process.env.DB_REMOTE_HOST,
        dialect: process.env.DB_CONNECTION,
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
    }
});
sequelize.authenticate().then(function (err) {
    if (err) {
        console.log('There is connection in ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});
module.exports = sequelize;