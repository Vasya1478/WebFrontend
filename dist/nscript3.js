'use strict';

var addArray = document.getElementById('array3');
var addKey = document.getElementById('key');
var addValue = document.getElementById('value');
var rt = [];
button.onclick = function (e) {
    e.preventDefault();
    rt[addKey.value] = addValue.value;
    var str = addKey.value + " " + addValue.value;
    console.log(rt);
    return rt;
};

addArray.innerHTML = button.onclick();