// A plain data carrier for "this request failed for a known reason" —
// no Express req/res here, that's the error-handling middleware's job.
class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
        Error.captureStackTrace(this, ApiError);
    }

    static badRequest(message) {
        return new ApiError(400, message);
    }

    static unauthorized(message) {
        return new ApiError(401, message);
    }

    static notFound(message) {
        return new ApiError(404, message);
    }

    static conflict(message) {
        return new ApiError(409, message);
    }

    static internal(message) {
        return new ApiError(500, message);
    }
}

module.exports = ApiError;
