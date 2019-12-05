'use strict';

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
// (function(i) {
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//         }, 3000);
// }) (i);
// }


var arr_2 = [10, 12, 15, 21];

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log('Index: ' + i + ', element: ' + arr_2[i]);
  }, 3000);
};

for (var i = 0; i < arr_2.length; i++) {
  _loop(i);
}