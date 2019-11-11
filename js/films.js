let mgenres = ['фантастика', 'боевик', 'приключения',
 'фэнтези', 'драма', 'комедия', 'мультфильм']

let mfilms = [
    ['10:00', 'Человек-паук', [mgenres[0], " " + mgenres[1], " " + mgenres[2]]],
    ['12:00', 'Собачья жизнь 2', [mgenres[3], " " + mgenres[4], " " + mgenres[5]]],
    ['14:00', 'История игрушек 4', [mgenres[6], " " + mgenres[3], " " + mgenres[5]]],
    ['16:00', 'Люди в чёрном: Интэрнешнл', [mgenres[0], " " + mgenres[1], " " + mgenres[5]]]
]

let mgets = [
    [document.getElementById('start_film_1'), document.getElementById('name_film_1'), document.getElementById('genre_film_1')],
    [document.getElementById('start_film_2'), document.getElementById('name_film_2'), document.getElementById('genre_film_2')],
    [document.getElementById('start_film_3'), document.getElementById('name_film_3'), document.getElementById('genre_film_3')],
    [document.getElementById('start_film_4'), document.getElementById('name_film_4'), document.getElementById('genre_film_4')]
]

for (let i = 0; i < mfilms.length; i++) {
    for (let j = 0; j < mfilms[i].length; j++) {
        mgets[i][j].innerHTML = mfilms[i][j]
    }
}

