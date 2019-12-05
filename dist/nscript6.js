'use strict';

var arr8 = document.getElementById('array7');
var arr9 = document.getElementById('array8');

var d1 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];
var max = d1[0];
for (var i = 0; i < d1.length; i++) {
    if (d1[i] > max) {
        max = d1[i];
    }
}

console.log(max);
arr9.innerHTML = "Массив: " + d1;
arr8.innerHTML = "Максимальное значение массива: " + max;