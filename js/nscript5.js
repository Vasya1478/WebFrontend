let arr5 = document.getElementById('array5')
let arr6 = document.getElementById('array6')


let d = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78]

let a1 = []
let a2 = []

for(let i = 0, j = 0, k = 0; i < d.length; i++) {
    if(d[i] % 2 == 0) {
        a1[j] = d[i]
        j++
    } else {
        a2[k] = d[i]
        k++
    }
}

arr5.innerHTML = "Чётный массив: " + a1
arr6.innerHTML = "Нечётный массив: " + a2

