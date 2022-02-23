const express = require('express');
const send = require('../controllers/send');
const logRequest = require('../middlewares/logRequest');
const parseUser = require('../middlewares/parseUser');

const route = express.Router();

// route.post('/', (req, res) => {
// console.log(req.body);
// res.status(200).send('Listening........');
// });

route.post('/',
    parseUser,
    logRequest,
    send
);

module.exports = route;
