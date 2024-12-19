const mongoose= require('mongoose')
const mongoDB_URL="mongodb+srv://divyaanilkumar24:DivyaA@cluster0.9cajpnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Establish a connection to the MongoDB database using Mongoose

const connectDB=()=>{
    return mongoose.connect(mongoDB_URL)
}

module.exports={connectDB}