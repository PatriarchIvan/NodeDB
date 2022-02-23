module.exports = (err, req, res, next) => {
    const { status, message } = err;
    res.status(status).send(message);
    next(err);
}
