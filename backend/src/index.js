const express = require('express')

const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors())

// Base route for API with a welcome message
app.get("/",(req,res)=>{
    return res.status(200).send({message: "Welcome to ecommerce api -node",status:true})
})

// Auth routes for user authentication
const authRouters = require("./routes/authRoute");
app.use('/auth',authRouters);

// User-related routes
const userRouters = require("./routes/userRoute");
app.use('/api/users',userRouters);

// Product-related routes for users
const productRouter=require("./routes/productRoutes");
app.use("/api/products",productRouter);

// Product-related routes for admins (admin-specific product management)
const adminPrdoductRouter = require("./routes/adminProductRoutes");
app.use("/api/admin/products",adminPrdoductRouter);

// Cart-related routes for users
const cartRouter=require("./routes/cartRoutes");
app.use("/api/cart",cartRouter)

// Cart item-related routes
const cartItemRouter=require("./routes/cartItemRoutes");
app.use("/api/cart_items", cartItemRouter)

// Order-related routes for users
const orderRouter= require("./routes/orderRoutes")
app.use("/api/orders",orderRouter);

// Admin order management routes
const adminOrderRouter= require("./routes/adminOrderRoutes")
app.use("/api/admin/orders", adminOrderRouter)

// Review-related routes for products
const reviewRouter= require("./routes/reviewRoutes");
app.use("/api/reviews", reviewRouter);

// Rating-related routes for products
const ratingRouter=require("./routes/ratingRoutes")
app.use("/api/ratings", ratingRouter);

// Payment-related routes
const paymentRouter=require("./routes/paymentRoutes");
app.use("/api/payments",paymentRouter);

module.exports= app;