const path = require('path')

const rootFile = require('../util/path.js')

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootFile, 'views', 'contact-us.html'));
}

exports.postSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname, '..' ,'views', 'success.html'));
}