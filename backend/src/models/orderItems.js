const mongoose = require('mongoose');

const { Schema } = mongoose;
// Mongoose schema for order items, capturing product details, size, quantity, and pricing information.

const orderItemSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    size: {
        type: String
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    // deliveryDate:{
    //     type:Date,
    // }
})

const orderItem = mongoose.model('orderItems', orderItemSchema);
module.exports = orderItem;