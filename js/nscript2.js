let arr2 = document.getElementById('array2')

let a3 = {
    3 : 'hello',
    'one' : 'h1',
    'testt' : 'vodoley',
    'ivan' : 'ivanov'
}


function res(){
    let obj = {}

    for(let key in a3) {
        if(key.length > 4) {
            obj = a3[key]
        }
    }
return obj
}

console.log(res())

arr2.innerHTML = res()