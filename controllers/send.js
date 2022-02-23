const { writeEntry } = require('../db');

const send = async (req, res, next) => {
    const entries = await writeEntry('admin', 'test data data data');
    res.status(201).json(entries);
};

module.exports = send;
