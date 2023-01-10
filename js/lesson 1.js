let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let ans1 = prompt('Введите обязательную статью расходов в этом месяце', '');
    let ans2 = prompt('Во сколько обойдется?', '');

    appData.expenses[ans1] = ans2;
}

console.log(appData);

alert(`Бюджет на день - ${ money/30 }`);