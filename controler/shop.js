const path = require('path');

const rootFile = require('../util/path.js')

exports.getShop = (req,res,next)=>{
    res.sendFile(path.join(rootFile, 'views', 'shop.html'));
}