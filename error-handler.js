const errorHandler = (req, res, next, error) => {
    return res.status(200).json({
        success: false,
        error: error.message
    });
}

module.exports = errorHandler;