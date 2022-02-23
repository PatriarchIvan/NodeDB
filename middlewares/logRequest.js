const logRequest = (req, res, next) => {
    console.log(`User [${req.userName}] calls EP`);
    next();
};

module.exports = logRequest;
