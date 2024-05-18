const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
    taxApplicable: { type: Boolean, required: true },
    tax: { type: Number, required: false },
    taxType: { type: String, required: false }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
