console.log('Does it work?')

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault()
        console.log('Clicked button')
    })
})

