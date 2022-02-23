const testMiddleware = (req, res, next) => {
    console.log('test');
    next();
};

module.exports = testMiddleware;
