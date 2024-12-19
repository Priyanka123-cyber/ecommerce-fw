const Cart = require("../models/cartModel");
const CartItem = require("../models/cartItemModel")
const Product= require("../models/productModel")

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }

}

async function findUserCart(userId) {
    try {
        let cart = await Cart.findOne({ user: userId })//user used
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
        cart.cartItems = cartItems;
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (const cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }
        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.totalDiscountedPrice=totalDiscountedPrice;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function addCartItem(userId, req) {
    try {
     const cart=await Cart.findOne({user:userId});
     const product= await Product.findById(req.productId);
     const isPresent=await CartItem.findOne({cart:cart._id,product:product._id,userId})

     if(!isPresent){
        const cartItem=new CartItem({
            product:product._id,
            cart:cart._id,
            quantity:1,
            userId,
            price:product.price,
            size:req.size,
            discountedPrice:product.discountedPrice
        })
        
        const createdCartItem=await cartItem.save();
        cart.cartItems.push(createdCartItem);
        await cart.save();
        return createdCartItem;
     }
     return isPresent
    } catch (error) {
        throw new Error(error.message)
    }
}

// async function addCartItem(userId, req) {
//     try {
//         // Find the cart associated with the user
//         const cart = await Cart.findOne({ user: userId });
//         if (!cart) {
//             throw new Error("Cart not found");
//         }

//         // Find the product by its ID
//         const product = await Product.findById(req.productId);
//         if (!product) {
//             throw new Error("Product not found");
//         }

//         // Check if the product is already in the cart for this user
//         const isPresent = await CartItem.findOne({
//             cart: cart._id,
//             product: product._id,
//             userId
//         });

//         if (!isPresent) {
//             // Create a new cart item if it doesn't exist
//             const cartItem = new CartItem({
//                 product: product._id,
//                 cart: cart._id,
//                 quantity: 1,
//                 userId,
//                 price: product.price,
//                 size: req.size,
//                 discountedPrice: product.discountedPrice
//             });

//             // Save the new cart item
//             const createdCartItem = await cartItem.save();

//             // Add the cart item to the user's cart
//             cart.cartItems.push(createdCartItem);
//             await cart.save();

//             // Return the created cart item and its details
//             return {
//                 message: "Cart item added successfully",
//                 cartItem: createdCartItem
//             };
//         } else {
//             // Return the existing cart item if it's already present
//             return {
//                 message: "Cart item already exists",
//                 cartItem: isPresent
//             };
//         }
//     } catch (error) {
//         throw new Error(error.message);
//     }
// }




module.exports = { createCart,findUserCart,addCartItem };