const express = require('express');

const route = express.Router();

route.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send('Listening........');
});

module.exports = route;
