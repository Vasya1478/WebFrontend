'use strict';

var arr2 = document.getElementById('array2');

var a3 = {
    3: 'hello',
    'one': 'h1',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

function res() {
    var obj = {};

    for (var key in a3) {
        if (key.length > 4) {
            obj = a3[key];
        }
    }
    return obj;
}

console.log(res());

arr2.innerHTML = res();