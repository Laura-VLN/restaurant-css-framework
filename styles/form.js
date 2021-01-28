console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')
    })
})


var formValid = document.getElementById('sending_button');
var name = document.getElementById('name');
var firstName = document.getElementById('firstName');

formValid.addEventListener('click', validation);

function validation(event){

    if (name.validity.valueMissing){
        event.preventDefault();
        missingName.textContent = 'Name is missing';
        missingName.style.color = 'red';
    }

}
