const { writeEntry } = require('../db');
const ErrorWithStatus = require('../services/errorWithStatus');

const send = async (req, res, next) => {
    const { userName, body: { data } } = req;
    if (!data) {
        next(new ErrorWithStatus(400, 'No data provided'));
    }
    const entries = await writeEntry(userName, data);
    res.status(201).json(entries);
};

module.exports = send;
