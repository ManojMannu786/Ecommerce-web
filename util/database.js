const database = require('mysql2');

const pool = database.createPool({
    host : 'localhost',
    user: 'root',
    database : 'node-complete',
    password : '1234'
})

module.exports = pool.promise();