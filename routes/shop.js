const express = require('express');

const routes = express.Router();

//add controler file
const shopControler = require('../controler/shop.js')

//checks for /shop/ =>get 
routes.get('/', shopControler.getShop)

module.exports = routes;