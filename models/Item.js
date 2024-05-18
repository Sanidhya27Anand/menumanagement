const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    taxApplicable: { type: Boolean, required: true },
    tax: { type: Number, required: false },
    baseAmount: { type: Number, required: true },
    discount: { type: Number, required: false, default: 0 },
    totalAmount: { type: Number, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', required: false }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
