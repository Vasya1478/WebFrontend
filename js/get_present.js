let guest_name = document.getElementById('guest_name')
let button_send_info = document.getElementById('sendPresentInfo')

console.log(guest_name.value)


button_send_info.onclick = function() {
    let name1 = guest_name.value
    console.log(name1)
}

