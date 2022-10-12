const { SerialPort } = require('serialport'); // Use Serial Communication

const sp = new SerialPort({
        path: 'COM6', 
        baudRate: 115200,
}); // Serial Port Connection

module.exports = sp;