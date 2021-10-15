const express = require('express');

const routes = express.Router();

const contactUscontroler = require('../controler/contact-us.js')

routes.post('/contact-us/success', contactUscontroler.postSuccess)
routes.get('/contact-us', contactUscontroler.getContactUs)

module.exports = routes;