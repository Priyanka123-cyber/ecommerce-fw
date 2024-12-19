const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwtProvider = require('../config/jwtProvider');

// Creates a new user after checking if the email is already registered, hashes the password, and saves the user to the database.

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;
        const isUserExist = await User.findOne({ email });
        if (isUserExist) {
            throw new Error("user already exist with email :", email)
        }
        password = await bcrypt.hash(password, 8);
        const user = await User.create({ firstName, lastName, email, password });
        return user;
    } catch (error) {
        throw new Error(error.message);

    }
}

// Retrieves a user by their ID from the database, throws an error if not found.

const findUserById = async (userId) => {

    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("user not found with id :", userId)
        }
        return user;

    } catch (error) {
        throw new Error(error.message);


    }

}

// Retrieves a user by their email, throws an error if not found.

const getUserByEmail = async (email) => {

    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("user not found with email :", email)
        }
        return user;

    } catch (error) {
        throw new Error(error.message);


    }

}

// Retrieves a user's profile using a token to decode the user ID and fetch the corresponding user from the database.

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUseridFromToken(token);
        const user = await User.findById(userId);
        if (!user) {
            throw new Error("user not found with id :", userId);
        }
        return user;
    } catch (error) {
        throw new Error(error.message);

    }
}

// Retrieves all users from the database.

const getAllUsers = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error.message);

    }
}
module.exports = { createUser, findUserById, getUserByEmail, getUserProfileByToken, getAllUsers }