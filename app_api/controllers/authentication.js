const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');
const ApiError = require('../errors/ApiError');

const register = async(req, res) => {
    // Validate message to insure that all parameters are present
    if (!req.body.name || !req.body.email || !req.body.password) {
        throw ApiError.badRequest('All fields required');
    }

    const user = new User(
        {
            name: req.body.name,     // Set User name
            email: req.body.email,   // Set e-mail address
            password: ''             // Start with empty password
        });
    user.setPassword(req.body.password)  // Set user password
    await user.save();

    // Return new user token
    const token = user.generateJWT();
    return res.status(200).json({ token });
};

const login = (req, res, next) => {
    // Validate message to ensure that email and password are present
    if (!req.body.email || !req.body.password) {
        return next(ApiError.badRequest('All fields required'));
    }

    // Delegate authenication to passport module
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            // Error in Authentication Process
            return next(err);
        }
        if (user) { // Auth succeeded, generating JWT
            const token = user.generateJWT();
            return res.status(200).json({ token });
        } else { // Auth failed return error
            return next(ApiError.unauthorized(info && info.message ? info.message : 'Invalid credentials'));
        }
    })(req, res, next);
};

// Export methods that drive endpoints
module.exports = {
    register,
    login
};