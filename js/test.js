let money = prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YY:MM:DD");


let appData = {
    consider: money,
    timeData: time,
    expenses: {},
    optionExpenses: {},
    income: [],
    savings: false,
};


let qMon = prompt("Введите обязательную статью расходов в этом месяце");
let qMonLose = prompt("Во сколько обойдётся?");
appData.expenses.qMon = qMonLose;
alert("Ваш бюджет на 1 день: " + appData.consider/30);

