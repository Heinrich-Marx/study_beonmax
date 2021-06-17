let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
var mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце');
var howMuch = prompt('Во сколько обойдется?');
var mandatoryExpenses2 = prompt('Введите обязательную статью расходов в этом месяце');
var howMuch2 = prompt('Во сколько обойдется?');
alert(`ваш бюджет на один день составляет ${money/30}`)
let appData = {
    cash: money,
    timeData: time,
    expenses: {
        artic: `${mandatoryExpenses} : ${howMuch}`,
        artic2: `${mandatoryExpenses2} : ${howMuch2}`,
    },
    optionalExpenses: {},
    income: [],
    savings: false,

}

console.log(appData.expenses)