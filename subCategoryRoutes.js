const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');

const router = express.Router();

router.post('/', subCategoryController.createSubCategory);
router.get('/', subCategoryController.getSubCategories);
router.get('/category/:categoryId', subCategoryController.getSubCategoriesByCategory);
router.get('/:id', subCategoryController.getSubCategory);
router.get('/name/:name', subCategoryController.getSubCategory);
router.put('/:id', subCategoryController.editSubCategory);

module.exports = router;
