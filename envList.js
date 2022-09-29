const db = require('./db.js'); // Database Connection

let envList = new Object(); // Save Co2 in DESC
let showList = new Object(); // Save Co2 in ASC

function selectCO2() {
    // Select Only the Top 7 from Database
    db.query('SELECT * FROM env ORDER BY id DESC LIMIT 7', function(error, results, fields) {
        if(error) {
            console.log(error);
        }
        envList = JSON.parse(JSON.stringify(results)); // RowDataPacket to Dictionary
        console.log(envList); // Check for Get Data in Dict (DESC)
        showList = envList.reverse(); // Change DESC to ASC
        console.log(showList); // Check for Get Data in Dict (ASC)
    });
    return showList;
}

selectCO2();