let money, time

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
}

start()

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let ans1 = prompt('Введите обязательную статью расходов в этом месяце', '');
            let ans2 = +prompt('Во сколько обойдется?', '');
        
            if (    (typeof(ans1) === 'string') &&
                    (typeof(ans2) === 'number') &&
                    (ans1 !== null) && (ans2 !== null) && 
                    (ans1.length != '') &&(ans2.length != '')) {
                appData.expenses[ans1] = ans2;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed()
        alert(`Бюджет на день - ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Низкий достаток')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 800) {
            console.log('Средний достаток')
        } else if (appData.moneyPerDay > 800) {
            console.log('Высокий достаток')
        } else {
            console.log('Значение не определено')
        }
    },
    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt('Введите сумму Вашего депозита', ''),
                percent = +prompt('Под какой процент?', '');
    
                appData.monthIncome = (save / 100 / 12 * percent).toFixed(2)
    
                alert(`Ваш доход с депозита - ${appData.monthIncome} ежемесячно`);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let ans = prompt('Статья необязательных расходов?', '');
    
            appData.optionalExpenses[i] = ans;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп.доход? (через запятую)', '')

        if (typeof items == 'string' && items !== '' && items !== null) {
            appData.income = items.split(', ')
            appData.income.push(prompt('Может что-то еще?', ''))
    
            appData.income.sort()
        } else {
            this.chooseIncome()
        }

        function showIncome() {
            console.log('Способы доп. заработка:')
            appData.income.forEach((el, index) => {
                console.log(`${index + 1}: ${el}`)
            })   
        }
        showIncome()
            
    }
};

function showAppData() {
    console.log('Наша программа включает в себя данные:')

    for (let key in appData) {
        console.log(`${key} : ${appData[key]}`)
    }
}

showAppData()