'use strict';

var buttonShowModalPresent = document.getElementById('getPresentModal');

var modalPresentWindow = document.getElementById('modalPresent');
var modalPresentCloseWindow = document.getElementById('closeModalPresent');
var sendModal = document.getElementById('sendPresentInfo');

buttonShowModalPresent.onclick = function () {
    modalPresentWindow.style.display = 'block';
};
modalPresentCloseWindow.onclick = function () {
    modalPresentWindow.style.display = 'none';
};

sendPresentInfo.onclick = function () {
    var nameGuest = document.getElementById('guest_name');
    var emailGuest = document.getElementById('email_guest');
    var selectGuest = document.getElementById('select_guest');

    if (nameGuest.value) {
        console.log('name  ' + nameGuest.value);
        nameGuest.style.border = '1px solid #bebebe';
    } else {
        nameGuest.style.border = '2px solid red';
    }
    if (emailGuest.value) {
        console.log('email  ' + emailGuest.value);
        emailGuest.style.border = '1px solid #bebebe';
    } else {
        emailGuest.style.border = '2px solid red';
    }

    if (selectGuest.value != 0) {
        console.log('select  ' + selectGuest.value);
        selectGuest.style.border = '1px solid #bebebe';
    } else {
        selectGuest.style.border = '2px solid red';
    }

    if (selectGuest.value != 0 && nameGuest.value && emailGuest.value) {
        modalPresentWindow.style.display = 'none';
    }
};
var nameGuest1 = document.getElementById('guest_name');
nameGuest1.onchange = function () {
    console.log('nameGuest ' + nameGuest1.value);
};

var emailGuest1 = document.getElementById('email_guest');
emailGuest1.onchange = function () {
    console.log('nameGuest ' + emailGuest1.value);
};

var selectGuest1 = document.getElementById('select_guest');
selectGuest1.onchange = function () {
    console.log('nameGuest ' + selectGuest1.value);
};