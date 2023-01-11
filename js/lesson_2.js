let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// == 1 ==

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

// == 2 ==

// let count = 0

// while (count < 2) {
//     let ans1 = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let ans2 = +prompt('Во сколько обойдется?', '');

//     if (    (typeof(ans1) === 'string') &&
//             (typeof(ans2) === 'number') &&
//             (ans1 !== null) && (ans2 !== null) && 
//             (ans1.length != '') &&(ans2.length != '')) {
//         appData.expenses[ans1] = ans2;
//     }

//     count++
// }

// == 3 ==

// let count = 0

// do {
//     let ans1 = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let ans2 = +prompt('Во сколько обойдется?', '');

//     if (    (typeof(ans1) === 'string') &&
//             (ans1 !== null) && (ans2 !== null) && 
//             (ans1.length != '') &&(ans2.length != '')) {
//         appData.expenses[ans1] = ans2;
//     }

//     count++
// } while (count < 2)

appData.moneyPerDay = appData.budget / 30

alert(`Бюджет на день - ${appData.moneyPerDay}`);

console.log(appData);