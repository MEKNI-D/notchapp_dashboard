var express = require('express');
var router = express.Router();

var categoriesCtrl = require('../controllers/categoryCtrl');

router.get('/', categoriesCtrl.getCategories);
router.get('/institutions', categoriesCtrl.getInstitutions);

module.exports = router;
