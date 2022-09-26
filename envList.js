const db = require('./db.js');

let cnt = 0;
let co2JSON = new Object();

let envList = new Object();
let showList = new Object();

function selectCO2() {
    let i = 0;
    db.query('SELECT * FROM env', function(error, results, fields) {
        if(error) {
            console.log(error);
        }
        envList = JSON.parse(JSON.stringify(results));
        // console.log(envList);
    });
    return envList;
}

function getList(list) {
    let i = 0;
    let j = 0;
    for (i = (list.length - 7); i < list.length; i++) {
        showList[j] = list[i];
        j++;
    }
    console.log(showList);
}

const result = selectCO2();
getList(result);
