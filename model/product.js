const fs = require('fs')

const path = require('path');

const rootFile = require('../util/path.js')

const filePath = path.join(rootFile, 'data', 'products.json')

const getProductsFromFile = (cb)=>{
    fs.readFile(filePath, (err,fileData)=>{
        if(err){
           return cb([]);
        }
        cb(JSON.parse(fileData))
    })
}

module.exports = class product{
    constructor(title){
        this.title = title;
    }

    save(){
        getProductsFromFile(productArr=>{
            productArr.push(this)
            fs.writeFile(filePath, JSON.stringify(productArr), err=>{
                console.log(err)
            })
        });
        // fs.readFile(filePath, (err,fileData)=>{
        //     let productArr = [];
        //     if(!err){
        //         productArr = JSON.parse(fileData)
        //     }
            
        // })
        
    }

    static fetchAll(cb){
        getProductsFromFile(cb)  ;      
    }
}