const express = require('express');
const signup = require('./signup');

const routes = express.Router();

routes.use('/signup', signup);

module.exports = routes;

