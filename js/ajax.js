const SYPEX_URL = "http://api.sypexgeo.net"
const CITIES_URL = "https://glavpunkt.ru/api/get_rf_cities"
let cities


let cityName = document.getElementById('city_name')
let cityFofm = document.getElementById('cityForm')
let cityCloseForm = document.getElementById('closeCityForm')

cityName.onclick = function() { 
    cityFofm.style.display = 'block'
    console.log(this)
}

cityCloseForm.onclick = function() {
    cityFofm.style.display = 'none'
}

function getRequest(apiUrl, callback) {
    let req = new XMLHttpRequest()
    let async = true
    
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200) {
            callback.call(req.responseText)
        }
        
    }
    req.open('GET', apiUrl, async)
    req.send()
    if (req.status != 200) {
        return(req.status + ': ' + req.statusText)
    }
}





jQuery(($) => {
    $('#city_name').on('click', function(e) {
        e.preventDefault()
      
        if(!cities) {
            getRequest(CITIES_URL, function() {
           
                cities = $.parseJSON(this)
                
            })
        }
    })

    $('body').on('input keyup', 'input[name=city_choose]', function() {
        let search = $(this).val()
        let counter = 0
        console.log(cities)
        let html = '<ul>'
        for (let i = 0; i < cities.length; i++) {
            if(cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5) {
                html += '<li data-city="'+ cities[i].name +'">' + cities[i].name + ' (' + cities[i].area + ')</li>'
                counter++
            }
        }

        html += '</ul>'
        $('#search_result').html(html)
    })

    $('body').on('click', '#search_result li', function(){
        $('#city_name').html($(this).data('city'))
        
        cityFofm.style.display = 'none'
        
    })


jQuery(document).ready(($) => {
    console.log('something')
    getRequest(SYPEX_URL, function() {
        let answear = $.parseJSON(this)
        let city = answear['city']['name_ru']
        console.log(city)
        $('#city_name').html(city)
    })
  
    // getRequest(CITIES_URL, function() {
           
    //     let cities_names = $.parseJSON(this)
    //     let city2 = cities_names['name']
    //     console.log(cities_names)
    // })
})
})