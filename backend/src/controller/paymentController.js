const paymentService = require('../services/paymentService');
// Creates a payment link for the specified order ID.
const createPaymentLink = async (req, res) => {
    try {
        const paymentLink = await paymentService.createPaymentLink(req.params.id);
        return res.status(200).send(paymentLink);
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
// Updates the payment information based on query parameters.
const updatePaymentInformation = async (req, res) => {
    try {
        await paymentService.updatePaymentInformation(req.query);
        return res.status(200).send({ message: "payment information updated", status: true });
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

module.exports = {
    createPaymentLink,
    updatePaymentInformation
}