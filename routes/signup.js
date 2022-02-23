const express = require('express');

const route = express.Router();

route.post('/', (req, res) => {
    const { body } = req;
    body.password = "pass";
    res.status(201).json(body);
});

module.exports = route;
