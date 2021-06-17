let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,

}
let i = 0;
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
appData.moneyPerDay = appData.budget / 30;
alert(`Ваш ежедневный бюджет составляет ${appData.moneyPerDay}`)
if (appData.moneyPerDay < 100) {
    console.log('минимальный достаток')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('средний достаток')
} else if (appData.moneyPerDay > 2000) {
    console.log('высокий достаток')
} else {
    console.log("введите корректное значение")
}
console.log(appData.expenses)