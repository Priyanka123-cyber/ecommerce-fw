const orderService = require("../services/orderService");

// Creates a new order for the authenticated user.

const createOrder = async (req, res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Finds a specific order by its ID.
const findOrderById = async (req, res) => {
    const user = await req.user;

    try {
        let createdOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Retrieves the order history for the authenticated user.
const orderHistory = async (req, res) => {
    const user = await req.user;
    try {
        let createdOrder = await orderService.usersOrderHistory(user._id);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}

