let buttonShowModalPresent = document.getElementById('getPresentModal')

let modalPresentWindow = document.getElementById('modalPresent')
let modalPresentCloseWindow = document.getElementById('closeModalPresent')
let sendModal = document.getElementById('sendPresentInfo')


buttonShowModalPresent.onclick = function() {
    modalPresentWindow.style.display = 'block'
}
modalPresentCloseWindow.onclick = function() {
    modalPresentWindow.style.display = 'none'
}

sendPresentInfo.onclick =function() {
    let nameGuest = document.getElementById('guest_name')
    let emailGuest = document.getElementById('email_guest')
    let selectGuest = document.getElementById('select_guest')


    if(nameGuest.value) {
        console.log('name  ' + nameGuest.value)
        nameGuest.style.border = '1px solid #bebebe'
    } else {
        nameGuest.style.border = '2px solid red'
    }
    if(emailGuest.value) {
        console.log('email  ' + emailGuest.value)
        emailGuest.style.border = '1px solid #bebebe'

    } else {
        emailGuest.style.border = '2px solid red'

    }

    if(selectGuest.value != 0) {
        console.log('select  ' + selectGuest.value)
        selectGuest.style.border = '1px solid #bebebe'

    } else {
        selectGuest.style.border = '2px solid red'

    }

    if(selectGuest.value != 0 && nameGuest.value && emailGuest.value) {
        modalPresentWindow.style.display = 'none'
    }

}
let nameGuest1 = document.getElementById('guest_name')
nameGuest1.onchange = function() {
    console.log('nameGuest ' + nameGuest1.value)
}

let emailGuest1 = document.getElementById('email_guest')
emailGuest1.onchange = function() {
    console.log('nameGuest ' + emailGuest1.value)
}

let selectGuest1 = document.getElementById('select_guest')
selectGuest1.onchange = function() {
    console.log('nameGuest ' + selectGuest1.value)
}