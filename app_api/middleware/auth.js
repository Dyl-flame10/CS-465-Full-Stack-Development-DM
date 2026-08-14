const { expressjwt } = require('express-jwt');

// Verifies the Bearer token on protected API routes and populates req.auth
// with the decoded JWT payload (_id, email, name — see models/user.js).
const authenticateJWT = expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256']
});

module.exports = authenticateJWT;
