const express = require('express');

const routes = express.Router();

//adding controler file
const addProductControler = require('../controler/add-product.js')

//checks for /admin/add-product => GET
routes.get('/add-product', addProductControler.getAddProduct)
//checks for /admin/add-product => POST
routes.post('/add-product', addProductControler.postAddProducts)

module.exports = routes;