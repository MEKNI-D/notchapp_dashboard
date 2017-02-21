/**
 * Created by Donia on 19/02/2017.
 */
var Category = require('../models/category');

// ** GET all categories
module.exports.getCategories = function (req, res) {
    Category.findAll({}).then(function (categories) {
        res.json(categories);
    });
}