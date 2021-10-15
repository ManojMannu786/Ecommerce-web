const path = require('path');

const rootFile = require('../util/path')

exports.getError = (req,res,next)=>{
    res.status(404).sendFile(path.join(rootFile, 'views', '404.html'))
}