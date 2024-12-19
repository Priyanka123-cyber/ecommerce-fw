const mongoose = require('mongoose');
// Mongoose schema for the cart, storing user information, cart items, and pricing details like total price and discounts.

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItems",
        required: true
    }],
    totalPrice:
    {
        type: Number,
        required: true,
        default: 0
    },
    totalItem:
    {
        type: Number,
        required: true,
        default: 0
    },
    totalDiscountedPrice:
    {
        type: Number,
        required: true,
        default: 0
    },
    discount:
    {
        type: Number,
        required: true,
        default: 0
    },
});

const cart = mongoose.model('cart', cartSchema);
module.exports = cart;