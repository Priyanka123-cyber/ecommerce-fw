const reviewService= require("../services/reviewService");

const createReview= async(req,res)=>{
    const user = req.user;
    try {
        const review = await reviewService.createReview(req.body,user);
        return res.status(201).send(review);

    } catch (error) {
        return res.status(500).send({error:error.message})  

        
    }
}

// const getAllReview= async(req,res)=>{
//     const productId= req.params.productId;
//     const user = req.user;
//     try {
//         const reviews = await reviewService.getAllReview(productId);
//         return res.status(201).send(reviews);

//     } catch (error) {
//         return res.status(500).send({error:error.message})  

        
//     }
// }

const getAllReview = async (req, res) => {
    const productId = req.params.productId;
  
    try {
      if (!productId) {
        return res.status(400).send({ error: "Product ID is required" });
      }
  
      const reviews = await reviewService.getAllReview(productId);
  
      if (!reviews || reviews.length === 0) {
        return res.status(404).send({ message: "No reviews found for this product" });
      }
  
      return res.status(200).send(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return res.status(500).send({ error: error.message });
    }
  };
  
module.exports={
    createReview,
    getAllReview
}