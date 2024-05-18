const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

// Database connection
mongoose.connect('mongodb://localhost:27017/');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);
app.use('/items', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
