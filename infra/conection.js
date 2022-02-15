const mysql = require('mysql2');

const conect = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'admin',
    password: 'Admin@123',
    database: 'petshop'
});

module.exports = conect;
