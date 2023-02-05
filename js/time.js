let totalHours = document.getElementById('totalHours')
let totalMinutes = document.getElementById('totalMinutes')
let calcHours = document.getElementById('calcHours')
let calcMinutes = document.getElementById('calcMinutes')
let culcTime = document.getElementById('culcTime')

let totalTime = +totalHours.textContent * 60 + +totalMinutes.textContent

culcTime.addEventListener('click', () => {
    let newTime = +(calcHours.value * 60) + +(calcMinutes.value)
    let newHours = Math.floor((totalTime + newTime) / 60)
    let newMinutes = (totalTime + newTime) % 60
    
    let ans = confirm('Добавить новое время?', '')

    if (ans) {
        totalHours.textContent = newHours
        totalMinutes.textContent = newMinutes
    }
    
})