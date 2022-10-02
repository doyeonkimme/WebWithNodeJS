const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

app.listen(port, () => {
    console.log(`Server running! http://localhost:${port}`);
});

app.get('/', function(req,res) {
    res.send("<h1>Hello World!</h1>")
})

app.get('/get', (req, res) => {
    let envList = new Object(); // Save Co2 in DESC
    let showList = new Object(); // Save Co2 in ASC
    db.query('SELECT * FROM env ORDER BY id DESC LIMIT 7', function(error, results, fields) {
        if(error) {
            console.log(error);
        } else {
        envList = JSON.parse(JSON.stringify(results)); // RowDataPacket to Dictionary
        // console.log(envList); // Check for Get Data in Dict (DESC)
        showList = envList.reverse(); // Change DESC to ASC
        // console.log(showList); // Check for Get Data in Dict (ASC)
        res.send(showList);
        }
    });
  });