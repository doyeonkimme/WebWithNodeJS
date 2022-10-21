const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ehdus6692!',
    database: 'get_info_env'
});

module.exports = db;