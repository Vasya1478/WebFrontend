"use strict";

var arr1 = document.getElementById('array1');

var getArr1 = ["String1", 45, 97, true, "String2", "false"];

function res() {
    var res1 = [];
    for (var i = 0; i < getArr1.length; i++) {
        res1[i] = getArr1[i];
    }
    return res1;
}

console.log(res());

arr1.innerHTML = res();