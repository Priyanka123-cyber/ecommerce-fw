const Rating = require("../models/ratingModel");
const productService = require("../services/productService");

// Creates a rating for a product by a user and saves it to the database.

async function createRating(req, user) {
    const product = await productService.findProductById(req.productId);
    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: req.rating,
        createdAt: new Date(),

    })

    return await rating.save();
}

// Retrieves all ratings for a given product by its product ID.

async function getProductRating(productId) {
    return await Rating.find({ product: productId });
}

module.exports = {
    createRating,
    getProductRating
}