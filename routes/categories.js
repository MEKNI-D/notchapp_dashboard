var express = require('express');
var router = express.Router();

var categoriesCtrl = require('../controllers/categoryCtrl');

router.get('/', categoriesCtrl.getCategories);
router.get('/:id', categoriesCtrl.getCategory);
router.get('/institutions/:id', categoriesCtrl.getInstitutions);

module.exports = router;
