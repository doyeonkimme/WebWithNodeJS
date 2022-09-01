// node_modules의 express 패키지 호출
const express = require('express');
const app = express();

// static() : Express에서 웹에 정적파일을 서비스할 때 사용
// public 경로 내의 모든 파일 서비스를 제공함
app.use(express.static('public'));

// GET : 조회
// POST : 데이터 추가
// PUT : 데이터 수정
// DELETE : 데이터 삭제
// app.get(경로, 함수(요청, 응답 {}));
app.get('/', function(req, res) {
    res.sendFile(__dirname, '/index.html');
    // __dirname : 전체 경로에서 파일 찾아줌
    // res.sendFile(__dirname, '/index.html');
});

// app이 사용할 포트번호 지정 (1024 아래로는 하지 않음)
app.listen(3000, function() {
    console.log('Open Express server!');
});