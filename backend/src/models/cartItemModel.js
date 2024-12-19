const mongoose = require('mongoose');
// Mongoose schema for storing cart items, linking to the cart, product, and user with relevant details like size, quantity, and pricing.

const cartItemSchema = new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cart',
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:1,
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true,
    },
})

const cartItem = mongoose.model("cartItems",cartItemSchema);
module.exports=cartItem;