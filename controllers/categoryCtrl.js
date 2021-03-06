/**
 * Created by Donia on 19/02/2017.
 */
var Category = require('../models/category');
var Institution = require('../models/institution');

// ** GET all categories
module.exports.getCategories = function (req, res) {
    Category.findAll({}).then(function (categories) {
        res.json(categories);
    });
}

// ** GET single category
module.exports.getCategory = function (req, res) {
    Category.find({id : req.params.id}).then(function (categories) {
        res.json(categories);
    });
}

// ** GET institutions category
module.exports.getInstitutions = function (req, res) {
    Institution.findAll({ where: {
        category: req.params.id
    }}).then(function (institutions) {
        res.json(institutions);
    });
}
