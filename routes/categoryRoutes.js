const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);
router.get('/name/:name', categoryController.getCategory);
router.put('/:id', categoryController.editCategory);

module.exports = router;
