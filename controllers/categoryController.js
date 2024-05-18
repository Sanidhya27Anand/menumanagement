const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a category by ID or name
exports.getCategory = async (req, res) => {
    try {
        const query = req.params.id ? { _id: req.params.id } : { name: req.params.name };
        const category = await Category.findOne(query);
        if (!category) {
            return res.status(404).send();
        }
        res.status(200).send(category);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit a category
exports.editCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) {
            return res.status(404).send();
        }
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send(error);
    }
};
