const Review = require("../models/review");
const productService = require("../services/productService");

// Creates a review for a product by a user and saves it to the database.

async function createReview(reqData, user) {
  const product = await productService.findProductById(reqData.productId);
  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
    createdAt: new Date(),

  })

  await product.save();
  return await review.save();
}

// Retrieves all reviews for a given product by its product ID, populates user information.

async function getAllReview(productId) {
  const product = await productService.findProductById(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  return await Review.find({ product: productId }).populate("user");
}


module.exports = {
  createReview,
  getAllReview
}