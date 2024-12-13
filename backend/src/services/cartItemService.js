const userService = require("../services/userService")
const CartItem = require("../models/cartItemModel")
// async function updateCartItem(userId, cartItemId, cartItemData) {
//     try {
//         // Fetch the cart item
//         const item = await findCartItemById(cartItemId);
//         console.log(item)
//         console.log(cartItemData)
//         if (!item) {
//             throw new Error(`Cart item not found: ${cartItemId}`);
//         }

//         // Fetch the user
//         const user = await userService.findUserById(userId);
//         if (!user) {
//             throw new Error(`User not found: ${userId}`);
//         }

//         // Verify user ownership of the cart item
//         if (user._id.toString() !== item.userId.toString()) {
//             throw new Error("You can't update another user's cart item.");
//         }

//         // Validate cart item data
//         if (!cartItemData.quantity || cartItemData.quantity <= 0) {
//             console.log(cartItemData.quantity)
//             throw new Error("Invalid quantity provided.");
//         }

//         // Ensure item.product exists
//         if (!item.product || typeof item.product.price !== "number" || typeof item.product.discountedPrice !== "number") {
//             throw new Error("Product details are missing or invalid.");
//         }

//         // Update cart item fields
//         item.quantity = cartItemData.quantity;
//         item.price = item.quantity * item.product.price;
//         item.discountedPrice = item.quantity * item.product.discountedPrice;

//         // Save the updated cart item
//         const updatedCartItem = await item.save();
//         return updatedCartItem;
//     } catch (error) {
//         console.error("Error updating cart item:", error.message);
//         throw new Error(`Failed to update cart item: ${error.message}`);
//     }
// }


async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        if (!item) {
            throw new Error("cart item not found : ", cartItemId)
        }
        console.log(cartItemData)
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

async function removeCartItem(userId, cartItemId){
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);
    console.log(user._id.toString(),cartItem.userId.toString());

    if(user._id.toString()===cartItem.userId.toString()){
       return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error ("you cant remove another user's item")
}

async function findCartItemById(cartItemId){
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if(cartItem){
        return cartItem
    }
    else{
        throw new Error("cart item not found with id",cartItemId)
    }

}
module.exports={
    updateCartItem,
    removeCartItem,
    findCartItemById
}