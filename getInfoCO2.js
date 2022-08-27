const { SerialPort } = require('serialport');
const sp = new SerialPort({path: 'COM6', baudRate: 115200,});

let i = 0;
let co2Data = "";

sp.on('open', function() {
    console.log("Serial Port OPEN");
    sp.on('data', function(data) {
        for (i = 0; i < data.length; i++) {
            co2Data = co2Data + String.fromCharCode(data[i]);
        }
        console.log("CO2 value : ", co2Data);
        co2Data = "";
    });
});