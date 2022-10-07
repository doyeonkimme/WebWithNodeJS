const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const sp = require('./arduino.js');

let co2 = 0;

// *** Get CO2 Concentration ***
function getCO2() {
    // Opens a Connection to the given Serial Port
    sp.open(function() {
        sp.on("error", function(error) {
            console.log("Error : ", error.message);
        });

        // Write Input Data to Arduino
        sp.write("1", function(error) {
            if(error) {
                return console.log("Error on Write : ", error.message);
            } else {
                console.log("Write Success");
            }
        });
    });

    // Get Output Data from Arduino
    sp.on('open', function() {
        let i = 0;
        let co2Data = ""; // CO2 in String
        sp.on('data', function(data) {
            // Get Data from Serial Monitor
            for (i = 0; i < data.length; i++) {
                co2Data = co2Data + String.fromCharCode(data[i]);
            }
            console.log("CO2 value in String : ", co2Data);
            co2 = Number(co2Data); // CO2 in Number
            co2Data = ""; // Variable Initialization
            console.log("CO2 value in Number : ", co2);
        });
    });

    return co2; // Return Number Variable for INT in DB
}

// *** Get Current Date ***
function getCurrent() {
    const current = new Date();

    const year = String(current.getFullYear()).padStart(4, "0");
    const month = String(current.getMonth() + 1).padStart(2, "0");
    const date = String(current.getDate()).padStart(2, "0");
    const hours = String(current.getHours()).padStart(2, "0");
    const minutes = String(current.getMinutes()).padStart(2, "0");
    const seconds = String(current.getSeconds()).padStart(2, "0");

    const formDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

    return formDate; // Return Formed Current Time for VARCHAR in DB
}

// *** Insert Current Time and CO2 Concentration ***
function insertCO2() {
    const resultDate = getCurrent(); // return formDate
    const resultCO2 = getCO2(); // return co2

    console.log("CO2 value for INSERT : ", resultCO2);

    if (resultCO2 !== 0) {
        db.query(
            `INSERT INTO env(date, co2_value) VALUES(?, ?)`,
            [resultDate, resultCO2],
            function(error, result) {
                if(error) {
                    throw error;
                }
            }
        );
    }
}

insertCO2();
setInterval(insertCO2, 5000);

app.listen(port, () => {
    console.log(`Server running! http://localhost:${port}`);
});

app.get('/', function(req,res) {
    res.send("<h1>Hello World!</h1>")
});

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