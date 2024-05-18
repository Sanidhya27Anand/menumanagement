const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/category/:categoryId', itemController.getItemsByCategory);
router.get('/subcategory/:subCategoryId', itemController.getItemsBySubCategory);
router.get('/:id', itemController.getItem);
router.get('/name/:name', itemController.getItem);
router.put('/:id', itemController.editItem);
router.get('/search', itemController.searchItems);

module.exports = router;
