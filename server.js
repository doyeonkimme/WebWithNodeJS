// node_modules의 express 패키지 호출
const express = require('express');
const app = express();

// GET : 조회
// POST : 데이터 추가
// PUT : 데이터 수정
// DELETE : 데이터 삭제
// app.get(경로, 함수(요청, 응답 {}));
app.get('/', function(req, res) {
    res.send("<h1>This is Express server!</h1>");

    // 정적 파일 지정은 send(출력내용)를 sendFile(파일이름)로 교체
    // __dirname : 전체 경로에서 파일 찾아줌
    // res.sendFile(__dirname, '/index.html');
});

// app이 사용할 포트번호 지정 (1024 아래로는 하지 않음)
app.listen(8080, function() {
    console.log('Open Express server!');
});