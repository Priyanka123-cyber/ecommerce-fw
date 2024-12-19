const userService = require("../services/userService")
const CartItem = require("../models/cartItemModel")


// Updates the quantity, price, and discounted price of a cart item for a specific user, ensuring the user can only modify their own cart items.

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        if (!item) {
            throw new Error("cart item not found : ", cartItemId)
        }
        const user = await userService.findUserById(userId);
        if (!user) {
            throw new Error("user not found : ", userId)
        }
        if (user._id.toString() === userId.toString()) {
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("You can't update another user's cart_item");
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
// Removes a cart item for the specified user, ensuring users can only delete their own items from the cart.

async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);


    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("you cant remove another user's item")
}
// Retrieves a cart item by its ID and populates the associated product data; throws an error if the cart item is not found.

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if (cartItem) {
        return cartItem
    }
    else {
        throw new Error("cart item not found with id", cartItemId)
    }

}
module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}