const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '1234', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;

// const database = require('mysql2');

// const pool = database.createPool({
//     host : 'localhost',
//     user: 'root',
//     database : 'node-complete',
//     password : '1234'
// })

// module.exports = pool.promise();