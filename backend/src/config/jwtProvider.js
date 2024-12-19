const jwt = require('jsonwebtoken');

const SECRET_KEY='hjljsksjkjkj'
// Generates a JWT token with the user ID and a 48-hour expiration
const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

// Extracts the user ID from a given JWT token after verification
const getUseridFromToken=(token)=>{
    const decodedToken= jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}
module.exports={generateToken,getUseridFromToken}