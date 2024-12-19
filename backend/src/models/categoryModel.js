const mongoose = require('mongoose');
// Mongoose schema for product categories, supporting parent-child relationships and hierarchical levels.

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    level: {
        type: Number,
        required: true,
    }
})

const category = mongoose.model('categories', categorySchema);
module.exports = category;