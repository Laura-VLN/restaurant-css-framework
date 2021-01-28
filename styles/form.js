document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.lenght > 0);
}

function isNumber(num) {
    return (num.lenght > 0) && !isNaN(num);
}


function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.className = 'placeholderRed';
    } else {
        field.className = '';
    }

    return isFieldValid;
}
