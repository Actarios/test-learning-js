const startBtn = document.getElementById('start')

const budgetValue = document.querySelector('.budget-value')
const daybudgetValue = document.querySelector('.daybudget-value')
const levelValue = document.querySelector('.level-value')
const expensesValue = document.querySelector('.expenses-value')
const optionalexpensesValue = document.querySelector('.optionalexpenses-value')
const incomeValue = document.querySelector('.income-value')
const monthsavingsValue = document.querySelector('.monthsavings-value')
const yearsavingsValue = document.querySelector('.yearsavings-value')

const expensesItems = document.getElementsByClassName('expenses-item')

const expensesItemBtn = document.querySelector('button.expenses-item-btn')
const optionalexpensesBtn = document.querySelector('button.optionalexpenses-btn')
const countBudgetBtn = document.querySelector('button.count-budget-btn')

const optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item')

const income = document.querySelector('#income')
const savings = document.querySelector('#savings')
const sumValue = document.querySelector('#sum')
const percentValue = document.querySelector('#percent')

const yearValue = document.querySelector('.year-value')
const monthValue = document.querySelector('.month-value')
const dayValue = document.querySelector('.day-value')

let money, time

expensesItemBtn.disabled = true
optionalexpensesBtn.disabled = true
countBudgetBtn.disabled = true

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money
    appData.timeData = time
    budgetValue.textContent = money.toFixed()
    yearValue.value = new Date(Date.parse(time)).getFullYear()
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1
    dayValue.value = new Date(Date.parse(time)).getDate()

    expensesItemBtn.disabled = false
    optionalexpensesBtn.disabled = false
    countBudgetBtn.disabled = false
})

expensesItemBtn.addEventListener('click', function() {
    let sum = 0

    for (let i = 0; i < expensesItems.length; i++) {
        let ans1 = expensesItems[i].value
        let ans2 = +expensesItems[++i].value
    
        if (    (typeof(ans1) === 'string') &&
                (typeof(ans2) === 'number') &&
                (ans1 !== null) && (ans2 !== null) && 
                (ans1.length != '') &&(ans2.length != '')) {
            appData.expenses[ans1] = ans2
            sum += +ans2
        }
    }
    expensesValue.textContent = sum

    appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed()
    daybudgetValue.textContent = appData.moneyPerDay
})

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalexpensesItems.length; i++) {
        let ans = optionalexpensesItems[i].value
        appData.optionalExpenses[i] = ans
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ', ' 
    }
})

countBudgetBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed()
        daybudgetValue.textContent = appData.moneyPerDay
    
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Низкий достаток'
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 800) {
            levelValue.textContent = 'Средний достаток'
        } else if (appData.moneyPerDay > 800) {
            levelValue.textContent = 'Высокий достаток'
        } else {
            levelValue.textContent = 'Значение не определено'
        }
    } else {
        daybudgetValue.textContent = 'Произошла ошибка'
    }
})

income.addEventListener('input', function() {
    let items = income.value
    appData.income = items.split(', ')
    incomeValue.textContent = appData.income
})

savings.addEventListener('click', function() {
    appData.savings = appData.savings == true ? false : true  
})

sumValue.addEventListener('input', function() {
    if (appData.savings) {
        let sum = +sumValue.value
        let percent = +percentValue.value

        appData.monthIncome = (sum/100/12*percent).toFixed(2)
        appData.yearIncome = (sum/100*percent).toFixed(2)

        monthsavingsValue.textContent = appData.monthIncome
        yearsavingsValue.textContent = appData.yearIncome
    }
})

percentValue.addEventListener('input', function() {
    if (appData.savings) {
        let sum = +sumValue.value
        let percent = +percentValue.value

        appData.monthIncome = (sum/100/12*percent).toFixed(2)
        appData.yearIncome = (sum/100*percent).toFixed(2)

        monthsavingsValue.textContent = appData.monthIncome
        yearsavingsValue.textContent = appData.yearIncome
    } 
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}