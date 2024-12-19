const mongoose = require('mongoose');
// Mongoose schema for storing user address details, including personal information and reference to the user.

const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    mobile: {
        type: String,
        required: true
    }
})

const address = mongoose.model("addresses", addressSchema);
module.exports = address;