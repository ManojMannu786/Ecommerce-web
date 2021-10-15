const path = require('path')

const http = require('http');

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

//adding routes files
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactUsRoutes = require('./routes/contact-us.js')

//adding controler file
const errorPage = require('./controler/404.js')

app.use(bodyParser.urlencoded({
    extended: false
}));

//use files statically
app.use(express.static(path.join(__dirname, 'public')));

//filter all '/admin' request to adminRoutes
app.use('/admin', adminRoutes);
//filter all '/shop' request to adminRoutes
app.use('/shop', shopRoutes);

app.use(contactUsRoutes);

app.use(errorPage.getError)

app.listen(4000);