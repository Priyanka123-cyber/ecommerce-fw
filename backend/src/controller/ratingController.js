const ratingService = require("../services/ratingService");
// Creates a new product rating/review by the logged-in user.
const createRating = async (req, res) => {
    const user = req.user;
    try {
        const review = await ratingService.createRating(req.body, user);
        return res.status(201).send(review);

    } catch (error) {
        return res.status(500).send({ error: error.message })


    }
}
// Retrieves all ratings/reviews for a specific product.
const getAllRatings = async (req, res) => {
    const productId = req.params.productId;
    const user = req.user;
    try {
        const reviews = await ratingService.getAllRatings(productId);
        return res.status(201).send(reviews);

    } catch (error) {
        return res.status(500).send({ error: error.message })


    }
}

module.exports = {
    createRating,
    getAllRatings
}