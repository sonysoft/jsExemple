let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt("Введите дату в формате YY:MM:DD", '');

    while(isNaN(money)|| money == '' || money == null)
    {
    money = +prompt("Ваш бюджет на месяц", '');
    }
}
start();




let appData = {
    consider: money,
    timeData: time,
    expenses: {},
    optionExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function()
    {
        for(let i = 0; i<2;i++)
        {
            let qMon = prompt("Введите обязательную статью расходов в этом месяце");
            let qMonLose = prompt("Во сколько обойдётся?");
            if(typeof(qMon) == 'string' && typeof(qMon) != null && typeof(qMonLose) == 'string' &&
            typeof(qMonLose) != null && qMon != '' && qMonLose != '' && qMon.length < 50)
            {
                console.log('done');
                appData.expenses[qMon] = qMonLose;
            }
            else
            {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function()
    {
        appData.dayBudget = appData.consider/30;
        alert("Бюджет на один день: "+ appData.dayBudget);
    },
    detectLevel: function()
    {
        if (appData.moneyPayDay < 100)
        {
            console.log("You have minimal salary");
        }
        else if (appData.moneyPayDay >= 100 && appData.moneyPayDay < 1000)
        {
            console.log("You have middal salary");
        }
        else if (appData.moneyPayDay > 1000)
        {
            console.log("You have high salary");
        }
    },
    checkSavings: function()
    {
        if (appData.savings == true)
        {
            let save = +prompt("Какова сумма накоплений?"),
            percent = prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12+percent;
            alert("Доход с месяца вашено депозита" + percent);
        }
    },
    hooseOptExpenses: function(){
        for(let i = 1; i < 4; i++)
        {
            let question = prompt("Напишите 3 категории расходов из 3/"+i);
            appData.expenses[i] = question;
        }
    }
};





