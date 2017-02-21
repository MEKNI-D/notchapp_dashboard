/**
 * Created by Donia on 19/02/2017.
 */
var express = require('express');
var router = express.Router();

var institutionCtrl = require('../controllers/institutionCtrl');

// ** GET all institutions
router.get('/', institutionCtrl.getAllInstitutions);
// ** GET institutions
router.get('/:category_id', institutionCtrl.getInstitutions);
// ** POST institutions from json file
router.post('/:category_id', institutionCtrl.addInstitutions);

module.exports = router;