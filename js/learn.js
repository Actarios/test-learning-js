let inputRub = document.getElementById('rub')
let inputEuro = document.getElementById('euro')

inputRub.addEventListener('input', () => {

    let request = new XMLHttpRequest()

    request.open('GET', './js/current.json')
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response)

            inputEuro.value = inputRub.value / data.euro
        } else {
            inputEuro.value = 'Fucking error!'
        }
    })

})