const mongoose = require('mongoose');
const { Schema } = mongoose

// Mongoose schema for product reviews, storing review text, user, product, and creation date.

const reviewSchema = new Schema({
    review: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const review = mongoose.model('reviews', reviewSchema)
module.exports = review;