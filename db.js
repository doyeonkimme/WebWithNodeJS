const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '패스워드',
    database: '데이터베이스 이름'
});

module.exports = db;