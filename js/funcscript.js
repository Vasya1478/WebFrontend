
/*Функция возвращает имя */

let name1 = document.getElementById('nam')
let takeName2 = document.getElementById('takeNam')
let button1 = document.getElementById('but')



button1.onclick = function() {
    name1.innerHTML = takeName2.value
    return takeName2.value
}

/**Функция определяет большее из двух чисел */

function max(first, second) {
    let m = 0
    if(first >= second){
        m = first
    }
    else if(second >= first) {
        m = second
    }

    return m
}

/**Функция возвращает случайное число из заданного диапазона */

let num1 = prompt("Число 1:")
let num2 = prompt("Число 2:")
alert(max(num1, num2))



function rand(num1,num2) {
    let z = 0
    let q = 0
    if(num1 >= num2) {
        z = num1 - num2
        q = num2 + Math.random() * (z + 1)
    } else if (num2 > num1) {
        z = num2 - num1
        q = num1 + Math.random() * (z + 1)
    }
    return Math.round(q)
}

let start = parseInt(prompt("Начало диапазона: "))
let finish = parseInt(prompt("Конец диапазона: "))


alert(rand(start, finish))
