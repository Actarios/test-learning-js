function showLang(lang, func) {
    console.log(`Я все еще учу язык ${lang}`)
    func()
}

function done() {
    console.log('Какой же я красавчик!')
}

showLang('JavaScript', done)