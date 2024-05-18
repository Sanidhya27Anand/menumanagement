const Item = require('../models/Item');

// Create a new item
exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get items by category ID
exports.getItemsByCategory = async (req, res) => {
    try {
        const items = await Item.find({ categoryId: req.params.categoryId });
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get items by sub-category ID
exports.getItemsBySubCategory = async (req, res) => {
    try {
        const items = await Item.find({ subCategoryId: req.params.subCategoryId });
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get an item by ID or name
exports.getItem = async (req, res) => {
    try {
        const query = req.params.id ? { _id: req.params.id } : { name: req.params.name };
        const item = await Item.findOne(query);
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Edit an item
exports.editItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!item) {
            return res.status(404).send();
        }
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Search items by name
exports.searchItems = async (req, res) => {
    try {
        const items = await Item.find({ name: new RegExp(req.query.name, 'i') });
        res.status(200).send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};
