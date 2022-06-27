const express = require('express');
const signup = require('./signup');
const send = require('./send');

const routes = express.Router();//ROUTER!!!!!!!!!!!!!!!

routes.use('/signup', signup);
routes.use('/', send);//USE!!!!!!!!!!

module.exports = routes;

