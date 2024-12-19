const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/userService");

// Middleware to authenticate user via JWT and attach user to request object.

const authenticate = async (req, res, next) => {
    //Bearer token...
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(404).send({ error: "token not foundsss" })
        }
        const userId = jwtProvider.getUseridFromToken(token);
        const user = await userService.findUserById(userId);
        req.user = user;
    } catch (error) {
        return res.status(500).send({ error: error.message });

    }
    next();
}
module.exports = authenticate