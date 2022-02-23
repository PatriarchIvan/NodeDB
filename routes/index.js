const express = require('express');
const signup = require('./signup');
const send = require('./send');

const routes = express.Router();

routes.use('/signup', signup);
routes.use('/', send);

module.exports = routes;

