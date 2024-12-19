const cartService = require("../services/cartService");
const Address = require("../models/addressModel");
const Order = require("../models/orderModel");
const OrderItem = require("../models/orderItems");



// Creates a new order for the user, including saving the shipping address, cart items, and calculating the total price.

async function createOrder(user, shipAddress) {
    let address;

    if (shipAddress._id) {
        let existAddress = await Address.findById(shipAddress._id);
        address = existAddress;
    }
    else {
        address = new Address(shipAddress);
        address.user = user;
        await address.save();


        user.address.push(address);
        await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice,
        })

        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discount: cart.discount,
        totalItem: cart.totalItem,
        shippingAddress: address,

    })
    const savedOrder = await createdOrder.save();
    const populatedOrder = await Order.findById(savedOrder._id)
        .populate({
            path: 'shippingAddress',
            select: 'firstName lastName streetAddress city state zipCode', // Add the fields you need
        })
        .exec();
    return populatedOrder;
}

// Changes the order status to "PLACED" and updates the payment details to "COMPLETED".

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
}

// Changes the order status to "CONFIRMED".

async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CONFIRMED";
    return await order.save();
}
// Changes the order status to "SHIPPED".

async function shipOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "SHIPPED";
    return await order.save();
}

// Changes the order status to "DELIVERED".

async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "DELIVERED";
    return await order.save();
}

// Changes the order status to "CANCELLED".

async function cancelledOrder(orderId) {
    const order = await findOrderById(orderId);

    order.orderStatus = "CANCELLED";
    return await order.save();
}

// Retrieves an order by its ID, populating related user, order items, and shipping address data.

async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress");
    console.log("order for id", order);

    return order

}

// Retrieves the user's order history with "PLACED" status, including populated order items.

async function usersOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "product" } }).lean()
        return orders;
    } catch (error) {
        throw new Error(error.message)

    }
}

// Retrieves all orders, including populated order items and related product details.

async function getAllOrders() {
    return await Order.find()
        .populate({ path: "orderItems", populate: { path: "product" } }).lean()
}

// Deletes the order by its ID.

async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
}

module.exports = {
    createOrder, placeOrder, confirmedOrder, shipOrder, deliverOrder, cancelledOrder, findOrderById,
    usersOrderHistory, getAllOrders, deleteOrder
}