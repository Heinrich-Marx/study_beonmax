'use strict';

let money, time;
let i = 0;
let j = 1;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start()


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpension: function() {
        for (i; i < 2; i++) {
            var a = prompt('Введите обязательную статью расходов в этом месяце');
            var b = prompt('Во сколько обойдется?');

            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log('DONE');
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Ваш ежедневный бюджет составляет ${appData.moneyPerDay}`)

    },
    detectLevel: () => {
        if (appData.moneyPerDay < 100) {
            console.log('минимальный достаток')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний достаток')
        } else if (appData.moneyPerDay > 2000) {
            console.log('высокий достаток')
        } else {
            console.log("введите корректное значение")
        }

    },
    checkSaving: () => {
        if (appData.savings === true) {
            let save = +prompt('какова сумма накоплений?');
            let percent = +prompt('под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert(`ваш доход в месяц составляет ${(appData.monthIncome).toFixed()}`)
        }
    },
    chooseOptExpenses: () => {
        for (j; j < 4; j++) {
            let a = prompt('Статья необязательных расходов?')

            if (a != null && a != '') {
                appData.optionalExpenses[j] = a;
            } else {
                alert('не врите, введите все расходы')
                j = j - 1
            }
        }
    },
    chooseIncome: () => {
        let items = prompt('введите ваш дополнительный доход(через запятую)', '');
        if (typeof(items) == null || typeof(items) != 'string' && items == '') {
            alert('вы ввели некорренктыне данные')
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        };
        appData.income.forEach((item, i) => alert(`Способы доп. заработка: ${i+1} - ${item}`))

    }
}

for (i in appData) {
    console.log(`Наша программа включает в себя данные: ${i}`)
}





















// while (i < 2) {
//     var a = prompt('Введите обязательную статью расходов в этом месяце');
//     var b = +prompt('Во сколько обойдется?');
//     i++
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log('DONE');
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }
// }
// do {
//     var a = prompt('Введите обязательную статью расходов в этом месяце');
//     var b = +prompt('Во сколько обойдется?');
//     i++
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log('DONE');
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }
// } while (i < 2)