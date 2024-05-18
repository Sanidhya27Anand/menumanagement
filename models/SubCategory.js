const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    taxApplicable: { type: Boolean, required: true, default: false },
    tax: { type: Number, required: false, default: 0 },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
