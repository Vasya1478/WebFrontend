const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
(function(i) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
        }, 3000);
}) (i);
}


const arr_2 = [10, 12, 15, 21];
for (let i = 0; i < arr_2.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr_2[i]);
}, 3000);
}