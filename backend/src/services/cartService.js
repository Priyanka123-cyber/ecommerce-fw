const Cart = require("../models/cartModel");
const CartItem = require("../models/cartItemModel")
const Product = require("../models/productModel")
// Creates a new cart for a user and saves it to the database.

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }

}
// Retrieves the user's cart with populated cart items, calculates total price, total discounted price, total items, and discount.

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
        cart.totalDiscountedPrice = totalDiscountedPrice;
        cart.discount = totalPrice - totalDiscountedPrice;

        return cart;
    } catch (error) {
        throw new Error(error.message)
    }
}

// Adds a product to the user's cart if not already present, or returns the existing cart item.

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId });
        const product = await Product.findById(req.productId);
        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId })

        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice
            })

            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return createdCartItem;
        }
        return isPresent
    } catch (error) {
        throw new Error(error.message)
    }
}





module.exports = { createCart, findUserCart, addCartItem };