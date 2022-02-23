const ErrorWithStatus = require('../services/errorWithStatus');

const parseUser = (req, res, next) => {
    const { user } = req.headers;

    if (!user) {
        next(new ErrorWithStatus(400, 'Not authorized'));
    }

    req.userName = user;
    next();
};

module.exports = parseUser;
