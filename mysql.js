const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '호스트명',
    port: 포트번호,
    user: '사용자명',
    password: '비밀번호',
    database: '데이터베이스'
});

conn.connect();

conn.query('SELECT * FROM 테이블 LIMIT 10', function(error, results, fields) {
    if(error) {
        console.log(error);
    }
    console.log(results);
});

conn.end();