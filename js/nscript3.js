let addArray = document.getElementById('array3')
let addKey = document.getElementById('key')
let addValue = document.getElementById('value')
let rt = []
button.onclick =  function(e) {
    e.preventDefault()
    rt[addKey.value] = addValue.value
    let str = addKey.value + " " + addValue.value
    console.log(rt)
    return   rt
    }



    addArray.innerHTML = button.onclick()
