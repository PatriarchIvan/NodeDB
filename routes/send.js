const express = require('express');
const send = require('../controllers/send');
const testMiddleware = require('../middlewares/test.middleware');

const route = express.Router();

// route.post('/', (req, res) => {
// console.log(req.body);
// res.status(200).send('Listening........');
// });

route.post('/',
    testMiddleware,
    send
);

module.exports = route;
