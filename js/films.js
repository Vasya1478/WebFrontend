let film1 = {}
let film2 = {}
let film3 = {}
let film4 = {}
let film5 = {}
let film6 = {}





let films = [
 film1 = {
        name: 'Человек-паук',
        start: '',
        genre: [0, 1, 2],
        image: "images/mov1.jpg",
        link: [0, 1, 2],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur',
    },

    film2 = {
        name: 'Собачья жизнь 2',
        start: '',
        genre: [3, 4, 5],
        image: "images/mov2.jpg",
        link: [0, 1, 2],
        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur',
    },

    film3 = {
        name: 'История игрушек 4',
        start: '',
        genre: [6, 3, 5],
        image: "images/mov4.jpg",
        link: [0, 1, 2],

        hire: false,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur',
    },

    film4 = {
        name: 'Люди в чёрном: Интэрнешнл',
        start: '16:00',
        genre: [0, 1, 5],
        image: "images/mov3.jpg",
        link: [0, 1, 2],

        price: 300,
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur',
    },

    film5 = {
        name: 'История игрушек 5',
        start: '14:00',
        genre: [6, 3, 5],
        link: [0, 1, 2],

        price: 250,
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur',

    },

    film6 = {
        name: 'Люди в чёрном 2',
        start: '16:00',
        genre: [0, 1, 5],
        link: [0, 1, 2],

        price: 200,
        hire: true,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur',

    },
]


const genres = [
    'фантастика',
    'боевик', 
    'приключения',
    'фэнтези',
    'драма', 
    'комедия', 
    'мультфильм',
]

const links = [
    `<a class="fd-l" href="https://twitter.com" target="_blank" title="Twitter">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="31px" height="31px">
        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
            d="M15.537,30.747 C7.060,30.747 0.187,23.865 0.187,15.375 C0.187,6.885 7.060,0.003 15.537,0.003 C24.015,0.003 30.887,6.885 30.887,15.375 C30.887,23.865 24.015,30.747 15.537,30.747 ZM23.698,13.855 C22.512,9.722 19.664,9.722 19.664,9.722 C19.664,9.722 20.873,9.034 20.838,8.615 C20.466,8.348 19.720,8.883 19.657,8.883 C19.845,8.751 19.733,8.373 19.489,8.231 C19.129,8.266 18.815,8.930 18.815,8.930 C18.815,8.930 18.638,8.604 18.478,8.604 C16.571,9.128 15.228,13.535 15.234,13.541 C9.007,9.332 8.595,10.141 8.595,10.152 C8.106,11.247 10.001,12.633 10.001,12.633 L9.460,12.649 C9.460,12.649 8.663,12.623 8.837,13.192 C9.015,13.920 9.959,14.674 9.967,14.682 C10.432,14.903 11.013,14.693 11.013,14.693 C11.013,14.693 10.397,15.016 10.007,15.260 C9.364,15.675 9.826,16.044 9.896,16.114 C10.733,17.011 12.048,16.953 12.048,16.953 C12.048,16.953 11.437,17.686 11.432,17.965 C11.432,18.419 11.839,18.699 11.873,18.734 C12.237,18.984 12.776,19.013 12.780,19.013 C9.411,22.588 5.351,18.992 5.351,18.979 C5.804,21.598 9.653,24.125 16.420,23.147 C21.908,22.274 23.663,16.254 23.663,16.254 C23.663,16.254 25.931,16.382 26.187,15.031 C25.477,15.159 24.454,14.950 24.454,14.950 C24.454,14.950 26.198,14.193 26.280,13.285 C25.256,14.076 23.733,13.855 23.698,13.855 Z" />
    </svg>
</a>`, 

`<a class="fd-l" href="https://facebook.com" target="_blank" title="Facebook">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="31px" height="31px">
    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
        d="M15.350,30.764 C6.872,30.764 -0.000,23.882 -0.000,15.393 C-0.000,6.903 6.872,0.021 15.350,0.021 C23.828,0.021 30.700,6.903 30.700,15.393 C30.700,23.882 23.828,30.764 15.350,30.764 ZM15.721,6.969 C12.254,6.969 13.044,11.088 12.929,12.590 C12.929,12.601 10.809,12.590 10.809,12.590 L10.809,15.384 L12.922,15.384 L12.922,25.220 L16.434,25.220 L16.426,15.384 L18.779,15.384 L19.240,12.574 L16.434,12.605 C16.434,10.610 16.280,9.799 17.445,9.799 C17.549,9.799 19.251,9.795 19.251,9.795 L19.255,6.969 L15.721,6.969 Z" />
</svg>
</a>`,

`<a class="fd-l" href="https://behance.net" target="_blank" title="Behance">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="32px" height="31px">
    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
        d="M15.806,30.764 C7.328,30.764 0.456,23.882 0.456,15.393 C0.456,6.903 7.328,0.021 15.806,0.021 C24.283,0.021 31.156,6.903 31.156,15.393 C31.156,23.882 24.283,30.764 15.806,30.764 ZM15.969,12.741 C15.969,9.268 12.194,9.547 12.194,9.547 L6.596,9.549 L6.603,21.872 L11.826,21.837 C11.826,21.837 16.320,22.183 16.360,18.148 C16.360,15.798 14.465,15.234 14.465,15.234 C14.465,15.234 15.969,14.689 15.969,12.741 ZM24.305,10.217 L19.513,10.217 L19.513,11.592 L24.305,11.592 L24.305,10.217 ZM21.854,12.325 C17.267,12.325 17.493,17.138 17.493,17.138 C17.493,17.138 17.237,21.877 21.944,21.877 C25.568,21.877 26.094,18.885 26.094,18.885 L23.763,18.885 C23.763,18.885 23.387,19.940 22.004,19.924 C19.733,19.924 19.809,17.726 19.809,17.726 L26.199,17.695 C26.199,17.695 26.861,12.325 21.854,12.325 ZM21.839,14.292 C23.808,14.292 23.854,16.160 23.854,16.160 L19.854,16.190 C19.854,16.190 20.004,14.292 21.839,14.292 ZM11.723,19.704 L9.117,19.694 L9.107,16.410 C9.107,16.410 10.692,16.421 11.758,16.421 C11.754,16.421 13.768,16.280 13.768,17.947 C13.768,19.944 11.723,19.704 11.723,19.704 ZM11.743,14.398 L9.112,14.413 L9.112,11.687 L11.385,11.699 C11.385,11.699 13.518,11.416 13.518,13.012 C13.518,14.609 11.743,14.398 11.743,14.398 Z" />
</svg>
</a>`,
]

let filmsHires = []

let filmsNew = []



for(let i = 0; i < films.length; i++) {
    if (films[i].hire === true) {
       // console.log(films[i])
        filmsHires.push(films[i])
    }
    //console.log(films[i])

    if(films[i].hire === false && films[i].new === true) {
        filmsNew.push(films[i])
    }
}

//console.log('filmsHires', filmsHires)


const film = {
    name: 'name',
    getName: function () {
        return this.name
    },

    getStart: function () {
        return this.start
    },

    getGenre: function () {
        const genreFilm = this.genre
        let arrGenres = []

        for(let i = 0; i < genreFilm.length; i++) {
            arrGenres.push(genres[genreFilm[i]])
        }

        let strGenres = arrGenres.join(', ')
        return strGenres
    },

    getLink: function () {
        const linkFilm = this.link
        let arrLink = []

        for(let i = 0; i < linkFilm.length; i++) {
           arrLink.push(links[linkFilm[i]])
        }

        let strLinks = arrLink.join(' ')
        return strLinks
    },

    getPrice: function() {
        return this.price
    },

    getImage: function() {
        return this.image
    }
}
 
let orderFormWindow = document.getElementById('orderForm')
let closeOrderForm = document.getElementById('closeOrderForm')
closeOrderForm.onclick = function() {
    orderFormWindow.style.display = 'none'
    orderFilmPhone.style.border = '1px solid #bebebe'
    orderName.style.border = '1px solid #bebebe'
}

for(let i = 0; i < filmsHires.length; i++) {

    
    const filmName = film.getName.apply(filmsHires[i])
    const filmStart = film.getStart.apply(filmsHires[i])
    const filmGenre = film.getGenre.apply(filmsHires[i])
    const filmPrice = film.getPrice.apply(filmsHires[i])
    let filmsHir = document.getElementById('filmsHir')

   // console.log()

    let filmHTML = 
    `<td id="start_film_${i}">${filmStart}</td>
    <td id="name_film_${i}">${filmName}</td>
    <td id="genre_film_${i}">${filmGenre}</td>
    <td>${filmPrice}</td>`

    let tr = document.createElement("tr")
    tr.className = 'strfilmsHir'
    tr.innerHTML = filmHTML

    tr.onclick = function() {
        orderFormWindow.style.display = 'block'
        console.log(this)

        let orderFilmName = document.getElementById('orderFilmName')
        let orderFilmStart = document.getElementById('orderFilmStart')
        let orderFilmGenre = document.getElementById('orderFilmGenre')
        let orderFilmPrice = document.getElementById('orderFilmPrice')
        


        orderFilmName.innerHTML = filmName
        orderFilmStart.innerHTML = filmStart
        orderFilmGenre.innerHTML = filmGenre
        orderFilmPrice.innerHTML = filmPrice

        let orderFilmTotal = document.getElementById('orderFilmTotal')
        let orderFilmTickets = document.getElementById('orderFilmTickets')

        //orderFilmTotal.innerHTML = filmPrice * orderFilmTickets.value

        orderFilmTickets.onchange = function() {
            orderFilmTotal.innerHTML = filmPrice * orderFilmTickets.value
        }

    }
    filmsHir.appendChild(tr)

}

let sendOrder = document.getElementById('sendOrder')
let orderFilmPhone = document.getElementById('orderFilmPhone')
let orderName = document.getElementById('orderName')

sendOrder.onclick = function() {

    if(orderFilmPhone.value) {
        console.log('Phone:  ' + orderFilmPhone.value)
        orderFilmPhone.style.border = '1px solid #bebebe'
    } else {
        orderFilmPhone.style.border = '2px solid red'
    }
    if(orderName.value) {
        console.log('Name:  ' + orderName.value)
        orderName.style.border = '1px solid #bebebe'

    } else {
        orderName.style.border = '2px solid red'

    }
}

let orderFilmPrice = document.getElementById('orderFilmPrice')
let orderFilmTickets = document.getElementById('orderFilmTickets')
let orderFilmTotal = document.getElementById('orderFilmTotal')


// if(orderFilmPrice.value.length > 0) {
//     let totalPrice = orderFilmPrice.value * orderFilmTickets.value
// }


/**Мозаика с фильмами */


for(let i = 0, j = 0; i < filmsNew.length ; i++) {
    const filmName = film.getName.apply(filmsNew[i])
    const filmImage = film.getImage.apply(filmsNew[i])
    const filmLink = film.getLink.apply(filmsHires[i])

    let owl_carousel = document.getElementById('owl')

    let filmNewHtml = `
    <div class="fd-inner">
        <div class="fd-poster"><img class="" src=${filmImage} alt=${filmName} /></div>
        <div class="fd-description">
            <p class="fd-text1">${filmName}</p>
            <hr class="fd-hr">
            <p class="fd-text2">
                Lorem ipsum dolor sit amet, consectetur
            </p>

            <div id="lin" class="fd-links">
            ${filmLink}
            </div>
        </div>
    </div>`

    // let linksDescription = document.getElementById('lin')
    // for(let i = 0; i < links.length; i++) {
    //    // linksDescription.innerHTML = "yj"
    //     links[i]
    //     console.log(links[i])
    // }

let divNew = document.createElement("div")
divNew.className = `item`
divNew.innerHTML = filmNewHtml

owl_carousel.appendChild(divNew)


}





//const listFilm = document.querySelectorAll('.strfilmsHir')
//console.log('uu', listFilm)



/* <td>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33px" height="33px">
    <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
        d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z" />
</svg>
</td> */

   // <a class="fd-l" href="https://twitter.com" target="_blank" title="Twitter">
                //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                //         width="31px" height="31px">
                //         <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                //             d="M15.537,30.747 C7.060,30.747 0.187,23.865 0.187,15.375 C0.187,6.885 7.060,0.003 15.537,0.003 C24.015,0.003 30.887,6.885 30.887,15.375 C30.887,23.865 24.015,30.747 15.537,30.747 ZM23.698,13.855 C22.512,9.722 19.664,9.722 19.664,9.722 C19.664,9.722 20.873,9.034 20.838,8.615 C20.466,8.348 19.720,8.883 19.657,8.883 C19.845,8.751 19.733,8.373 19.489,8.231 C19.129,8.266 18.815,8.930 18.815,8.930 C18.815,8.930 18.638,8.604 18.478,8.604 C16.571,9.128 15.228,13.535 15.234,13.541 C9.007,9.332 8.595,10.141 8.595,10.152 C8.106,11.247 10.001,12.633 10.001,12.633 L9.460,12.649 C9.460,12.649 8.663,12.623 8.837,13.192 C9.015,13.920 9.959,14.674 9.967,14.682 C10.432,14.903 11.013,14.693 11.013,14.693 C11.013,14.693 10.397,15.016 10.007,15.260 C9.364,15.675 9.826,16.044 9.896,16.114 C10.733,17.011 12.048,16.953 12.048,16.953 C12.048,16.953 11.437,17.686 11.432,17.965 C11.432,18.419 11.839,18.699 11.873,18.734 C12.237,18.984 12.776,19.013 12.780,19.013 C9.411,22.588 5.351,18.992 5.351,18.979 C5.804,21.598 9.653,24.125 16.420,23.147 C21.908,22.274 23.663,16.254 23.663,16.254 C23.663,16.254 25.931,16.382 26.187,15.031 C25.477,15.159 24.454,14.950 24.454,14.950 C24.454,14.950 26.198,14.193 26.280,13.285 C25.256,14.076 23.733,13.855 23.698,13.855 Z" />
                //     </svg>
                // </a>
                // <a class="fd-l" href="https://facebook.com" target="_blank" title="Facebook">
                //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                //         width="31px" height="31px">
                //         <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                //             d="M15.350,30.764 C6.872,30.764 -0.000,23.882 -0.000,15.393 C-0.000,6.903 6.872,0.021 15.350,0.021 C23.828,0.021 30.700,6.903 30.700,15.393 C30.700,23.882 23.828,30.764 15.350,30.764 ZM15.721,6.969 C12.254,6.969 13.044,11.088 12.929,12.590 C12.929,12.601 10.809,12.590 10.809,12.590 L10.809,15.384 L12.922,15.384 L12.922,25.220 L16.434,25.220 L16.426,15.384 L18.779,15.384 L19.240,12.574 L16.434,12.605 C16.434,10.610 16.280,9.799 17.445,9.799 C17.549,9.799 19.251,9.795 19.251,9.795 L19.255,6.969 L15.721,6.969 Z" />
                //     </svg>
                // </a>


                // <a class="fd-l" href="https://behance.net" target="_blank" title="Behance">
                //     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                //         width="32px" height="31px">
                //         <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                //             d="M15.806,30.764 C7.328,30.764 0.456,23.882 0.456,15.393 C0.456,6.903 7.328,0.021 15.806,0.021 C24.283,0.021 31.156,6.903 31.156,15.393 C31.156,23.882 24.283,30.764 15.806,30.764 ZM15.969,12.741 C15.969,9.268 12.194,9.547 12.194,9.547 L6.596,9.549 L6.603,21.872 L11.826,21.837 C11.826,21.837 16.320,22.183 16.360,18.148 C16.360,15.798 14.465,15.234 14.465,15.234 C14.465,15.234 15.969,14.689 15.969,12.741 ZM24.305,10.217 L19.513,10.217 L19.513,11.592 L24.305,11.592 L24.305,10.217 ZM21.854,12.325 C17.267,12.325 17.493,17.138 17.493,17.138 C17.493,17.138 17.237,21.877 21.944,21.877 C25.568,21.877 26.094,18.885 26.094,18.885 L23.763,18.885 C23.763,18.885 23.387,19.940 22.004,19.924 C19.733,19.924 19.809,17.726 19.809,17.726 L26.199,17.695 C26.199,17.695 26.861,12.325 21.854,12.325 ZM21.839,14.292 C23.808,14.292 23.854,16.160 23.854,16.160 L19.854,16.190 C19.854,16.190 20.004,14.292 21.839,14.292 ZM11.723,19.704 L9.117,19.694 L9.107,16.410 C9.107,16.410 10.692,16.421 11.758,16.421 C11.754,16.421 13.768,16.280 13.768,17.947 C13.768,19.944 11.723,19.704 11.723,19.704 ZM11.743,14.398 L9.112,14.413 L9.112,11.687 L11.385,11.699 C11.385,11.699 13.518,11.416 13.518,13.012 C13.518,14.609 11.743,14.398 11.743,14.398 Z" />
                //     </svg>
                // </a>