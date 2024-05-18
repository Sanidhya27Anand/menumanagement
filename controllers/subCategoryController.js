const SubCategory = require('../models/SubCategory');

// Create a new sub-category
exports.createSubCategory = async (req, res) => {
    try {
        const subCategory = new SubCategory(req.body);
        await subCategory.save();
        res.status(201).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all sub-categories
exports.getSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.status(200).send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get sub-categories by category ID
exports.getSubCategoriesByCategory = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
        res.status(200).send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a sub-category by ID or name
exports.getSubCategory = async (req, res) => {
    try {
        const query = req.params.id ? { _id: req.params.id } : { name: req.params.name };
        const subCategory = await SubCategory.findOne(query);
        if (!subCategory) {
            return res.status(404).send();
        }
        res.status(200).send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit a sub-category
exports.editSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!subCategory) {
            return res.status(404).send();
        }
        res.status(200).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};
