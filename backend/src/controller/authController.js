const userService = require("../services/userService");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require('bcrypt');
const cartService = require("../services/cartService");
// Handles user registration by creating a new user, generating a JWT, and initializing a cart for the user.

const register = async (req, res) => {

    try {
        const user = await userService.createUser(req.body);
        const jwt = jwtProvider.generateToken(user._id);

        await cartService.createCart(user);
        return res.status(200).send({ jwt, message: "register success" })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }

}
// Handles user login by validating email and password, and generating a JWT for authenticated users.

const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);
        if (!user) {
            return res.status(404).send({ message: "user not found with email :", email });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password..." });
        }
        const jwt = jwtProvider.generateToken(user._id);
        return res.status(200).send({ jwt, message: "login success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });

    }
}

module.exports = { register, login }