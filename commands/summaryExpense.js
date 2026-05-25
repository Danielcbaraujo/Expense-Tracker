const readExpenses = require("../utils/readExpenses");

function summaryExpense() {

  const expenses = readExpenses();

  const monthIndex =
    process.argv.indexOf("--month");

  const month =
    Number(process.argv[monthIndex + 1]);

  if (month) {

    const filteredExpenses =
      expenses.filter(expense => {

        const expenseMonth =
          new Date(expense.date).getMonth() + 1;

        return expenseMonth === month;
      });

    const total =
      filteredExpenses.reduce(
        (accumulator, expense) => {
          return accumulator + expense.amount;
        },
        0
      );

    console.log(
      `Total do mês ${month}: $${total}`
    );

  } else {

    const total = expenses.reduce(
      (accumulator, expense) => {
        return accumulator + expense.amount;
      },
      0
    );

    console.log(
      `Total de despesas: $${total}`
    );
  }
}

module.exports = summaryExpense;