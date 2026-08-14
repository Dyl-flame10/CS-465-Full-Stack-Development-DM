const { UnauthorizedError } = require('express-jwt');
const ApiError = require('../errors/ApiError');

// Formats any error reaching an /api route as JSON. Mounted only on /api —
// app_server's page routes keep using the rendered HTML error view.
const errorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({ message: err.message });
    }

    if (err instanceof UnauthorizedError) {
        return res.status(401).json({ message: err.message });
    }

    if (err.name === 'ValidationError' || err.name === 'CastError') { // Mongoose
        return res.status(400).json({ message: err.message });
    }

    if (err.code === 11000) { // Mongoose duplicate key
        const field = Object.keys(err.keyValue || {})[0] || 'value';
        return res.status(409).json({ message: `${field} already in use` });
    }

    const status = err.status || err.statusCode;
    if (status >= 400 && status < 500) { // e.g. body-parser's malformed-JSON SyntaxError
        return res.status(status).json({ message: err.message });
    }

    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorHandler;
