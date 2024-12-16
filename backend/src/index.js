const express = require('express')

const cors = require('cors');

const app = express();
app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message: "Welcome to ecommerce api -node",status:true})
})

const authRouters = require("./routes/authRoute");
app.use('/auth',authRouters);

const userRouters = require("./routes/userRoute");
app.use('/api/users',userRouters);

const productRouter=require("./routes/productRoutes");
app.use("/api/products",productRouter);

const adminPrdoductRouter = require("./routes/adminProductRoutes");
app.use("/api/admin/products",adminPrdoductRouter);

const cartRouter=require("./routes/cartRoutes");
app.use("/api/cart",cartRouter)

const cartItemRouter=require("./routes/cartItemRoutes");
app.use("/api/cart_items", cartItemRouter)

const orderRouter= require("./routes/orderRoutes")
app.use("/api/orders",orderRouter);

const adminOrderRouter= require("./routes/adminOrderRoutes")
app.use("/api/admin/orders", adminOrderRouter)

const reviewRouter= require("./routes/reviewRoutes");
app.use("/api/reviews", reviewRouter);

const ratingRouter=require("./routes/ratingRoutes")
app.use("/api/ratings", ratingRouter);

const paymentRouter=require("./routes/paymentRoutes");
app.use("/api/payments",paymentRouter);

module.exports= app;