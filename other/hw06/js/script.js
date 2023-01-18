const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu-item')
const body = document.querySelector('body')
const title = document.querySelector('#title')
const adv = document.querySelector('.adv')
const relation = document.querySelector('#prompt')
const answer = prompt('Как вы относитесь к технике Apple?', '')

// 1

menu.insertBefore(menuItem[2], menuItem[1])

function addElemMenu(num) {
    const el = document.createElement('li')
    const text = document.createTextNode(`${num} пункт`)

    el.classList.add('menu-item')
    el.textContent = `${num} пункт`
    menu.appendChild(el)
}

addElemMenu('Пятый')

// 2

body.style.background = 'url(./img/apple_true.jpg) center no-repeat'
body.style.backgroundSize = 'cover'

// 3

function changeTitle() {
    const string = title.textContent.trim()
    const arr = string.split(' ')
    arr.splice(3, 0, 'подлинную')

    const newString = arr.join(' ')

    title.textContent = newString
}

changeTitle()

// 4

adv.parentNode.removeChild(adv)

// 5

relation.textContent = answer