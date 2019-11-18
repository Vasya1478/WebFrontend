let arr8 = document.getElementById('array7')
let arr9 = document.getElementById('array8')



let d1 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]
let max = 0
for( let i = 0; i < d1.length; i++) {
    if(d1[i] > max){
        max = d1[i]
    }

}

console.log(max)
arr9.innerHTML = "Массив: " + d1
arr8.innerHTML = "Максимальное значение массива: " + max

