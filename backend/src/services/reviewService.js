const Review = require("../models/review");
const productService = require("../services/productService");

async function createReview(reqData,user){
    const product = await productService.findProductById(reqData.productId);
    const review = new Review({
        user:user._id,
        product:product._id,
        review:reqData.review,
        createdAt:new Date(),

    })

    await product.save();
    return await review.save();
}

// async function getAllReview(productId){
//     const product = await productService.findProductById(reqData.productId);
//     return await Review.find({product:productId}).populate("user");
// }

async function getAllReview(productId) {
    // Validate productId
    const product = await productService.findProductById(productId); // Use productId directly
  
    if (!product) {
      throw new Error("Product not found");
    }
  
    // Fetch and populate reviews
    return await Review.find({ product: productId }).populate("user");
  }
  

module.exports={createReview,
    getAllReview
}