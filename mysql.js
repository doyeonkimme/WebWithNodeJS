const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '패스워드',
    database: '데이터베이스 이름'
});

conn.connect();

conn.query('SELECT * FROM env', function(error, results, fields) {
    if(error) {
        console.log(error);
    }
    console.log(results);
});

conn.end();