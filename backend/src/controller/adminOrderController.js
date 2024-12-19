const orderService = require("../services/orderService");
// Fetches and returns all orders from the database.
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Marks a specific order as confirmed based on the provided order ID.

const confirmedOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Updates the status of a specific order to 'shipped' based on the provided order ID.
const shipOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Updates the status of a specific order to 'delivered' based on the provided order ID.
const deliverOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Marks a specific order as cancelled based on the provided order ID.
const cancelledOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelledOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
// Deletes a specific order from the database based on the provided order ID.

const deleteOrders = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    getAllOrders,
    confirmedOrders,
    shipOrders,
    deliverOrders,
    cancelledOrders,
    deleteOrders
}