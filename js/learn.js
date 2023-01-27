// document.addEventListener('DOMContentLoaded', () => {

//     const box = document.querySelector('.box')
//     const result = document.querySelector('#result')
//     const width = box.clientWidth
//     const height = box.clientHeight
//     const btn = document.querySelector('button')

//     result.textContent = `width - ${width}, height = ${height}`

//     console.log(box.getBoundingClientRect())

//     console.log(document.documentElement.clientWidth)
//     console.log(document.documentElement.clientHeight)

//     btn.addEventListener('click', function() {
//         box.scrollTop = 0
//     })

//     scrollTo(0, 200)

//     let num = prompt('Введите число', '')
//     alert(isFinite(num))

// })

// const orderList = document.querySelector('.orders_list')
// const orderItems = document.querySelectorAll('.orders_list_num')

// orderItems.forEach(el => {
//     let close = document.createElement('span')
//     close.classList.add('close')
//     el.append(close)
// })

// orderList.addEventListener('click', function(e) {
//     if (e.target.matches('.close')) {
//         let ans = confirm('Удалить выбранную позицию?', '')
//         if (ans) e.target.parentNode.remove()
//     }
// })