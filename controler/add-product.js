const rootFile = require('../util/path.js')

const path = require('path');

const Product = require('../model/product.js')


exports.getAddProduct = (req,res,next)=>{
   Product.fetchAll((prducts)=>{
     res.sendFile(path.join(rootFile, 'views', 'add-product.html'))
    });
    
}

exports.postAddProducts = (req,res,next)=>{
    const newProduct = new Product(req.body.title);
    newProduct.save();
    res.redirect('/shop');  //redirect to /shop
}