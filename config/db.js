/**
 * Created by Donia on 14/02/2017.
 */
require('dotenv').config();
var Sequelize = require('sequelize');
//var seq = new Sequelize('notchapp', 'root');

var sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
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