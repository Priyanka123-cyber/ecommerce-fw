const mongoose = require('mongoose');
// Mongoose schema for products, including details like title, description, pricing, sizes, ratings, reviews, and category.

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number
    },
    discountPercent: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
    },
    color: {
        type: String
    },
    sizes: [{
        name: { type: String },
        quantity: { type: Number }
    }],
    imageUrl: {
        type: String
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ratings'
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews'
        }
    ],
    numRatings: {
        type: Number,
        default: 0,

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

const product = mongoose.model('products', productSchema);
module.exports = product;