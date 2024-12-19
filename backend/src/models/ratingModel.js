const mongoose = require('mongoose');

const { Schema } = mongoose;
// Mongoose schema for product ratings, storing user, product, rating value, and creation date.

const ratingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const rating = mongoose.model('ratings', ratingSchema);
module.exports = rating