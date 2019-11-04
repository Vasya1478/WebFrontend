const genre_1 = 'фантастика'
const genre_2 = 'боевик'
const genre_3 = 'приключения'
const genre_4 = 'фэнтези'
const genre_5 = 'драма'
const genre_6 = 'комедия'
const genre_7 = 'мультфильм'

let start_film_1 = '10.00'
let start_film_2 = '12.00'
let start_film_3 = '14.00'
let start_film_4 = '16.00'


let name_film_1 = 'Человек-паук'
let name_film_2 = 'Собачья жизнь 2'
let name_film_3 = 'История игрушек 4'
let name_film_4 = 'Люди в чёрном: Интернэшнл'

let genre_film_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3
let genre_film_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6
let genre_film_3 = genre_7 + ', ' + genre_4 + ', ' + genre_6
let genre_film_4 = genre_1 + ', ' + genre_2 + ', ' + genre_6

let element_film_start_1 = document.getElementById('start_film_1')
let element_film_name_1 = document.getElementById('name_film_1')
let element_film_genre_1 = document.getElementById('genre_film_1')

let element_film_start_2 = document.getElementById('start_film_2')
let element_film_name_2 = document.getElementById('name_film_2')
let element_film_genre_2 = document.getElementById('genre_film_2')

let element_film_start_3 = document.getElementById('start_film_3')
let element_film_name_3 = document.getElementById('name_film_3')
let element_film_genre_3 = document.getElementById('genre_film_3')

let element_film_start_4 = document.getElementById('start_film_4')
let element_film_name_4 = document.getElementById('name_film_4')
let element_film_genre_4 = document.getElementById('genre_film_4')

element_film_start_1.innerHTML = start_film_1
element_film_name_1.innerHTML = name_film_1
element_film_genre_1.innerHTML = genre_film_1

element_film_start_2.innerHTML = start_film_2
element_film_name_2.innerHTML = name_film_2
element_film_genre_2.innerHTML = genre_film_2

element_film_start_3.innerHTML = start_film_3
element_film_name_3.innerHTML = name_film_3
element_film_genre_3.innerHTML = genre_film_3

element_film_start_4.innerHTML = start_film_4
element_film_name_4.innerHTML = name_film_4
element_film_genre_4.innerHTML = genre_film_4


