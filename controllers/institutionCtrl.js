/**
 * Created by Donia on 19/02/2017.
 */
var Institution = require('../models/institution');
var fs = require('fs');
var inst = require('../public/institutions/dispensaire.json');
// ** GET all institutions
module.exports.getInstitutions = function (req, res) {
    Institution.findAll({}).then(function (institutions) {
        res.json(institutions);
    });
}

// ** GET all hospitals
module.exports.getHospitals = function (req, res) {
    Institution.findAll({ where: {
        category: 1
    }}).then(function (hospitals) {
        res.json(hospitals);
    });
}

// ** GET all schools
module.exports.getSchools = function (req, res) {
    Institution.findAll({ where: {
        category: 2
    }}).then(function (schools) {
        res.json(schools);
    });
}

// ** POST institutions from json file
module.exports.addInstitutions = function (req, res) {
    var obj;
    fs.readFile('C:/Users/Donia/WebstormProjects/notchapp_backend/public/institutions/ecoles.json', 'utf8',
        function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);

        obj.forEach(function(entry) {
            Institution.create({
                name: entry.nom,
                city: entry.circonscription,
                circonscription: entry.circonscription,
                delegation: entry.delegation,
                longitude: parseFloat(entry.longitude),
                latitude: parseFloat(entry.latitude),
                category: req.params.category_id

            }).then(function(institution) {
                console.log(institution);
            });
        });
            res.json(obj);
    });
    /*Institution.findAll({}).then(function (institutions) {
        res.json(institutions);
    });*/
}
