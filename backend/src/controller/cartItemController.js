const cartItemService = require("../services/cartItemService");
// Updates a specific cart item for the authenticated user.
const updateCartItem = async (req, res) => {
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body);
        return res.status(200).send(updatedCartItem);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
// Removes a specific cart item for the authenticated user.
const removeCartItem = async (req, res) => {
    const user = await req.user;
    try {
        await cartItemService.removeCartItem(user._id, req.params.id);
        return res.status(200).send({ message: "cart item removed successfully" });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    updateCartItem,
    removeCartItem
}