const readExpenses = require("./utils/readExpenses");
const saveExpenses = require("./utils/saveExpenses");
const addExpense = require("./commands/addExpense");
const listExpenses = require("./commands/listExpenses");
const deleteExpense = require("./commands/deleteExpense");
const updateExpense = require("./commands/updateExpense");
const command = process.argv[2];
const expenses = readExpenses(expenses);

if (command === "add") {
  addExpense();
}


if (command === "list") {
   listExpenses();
}

if (command === "delete") {
  deleteExpense();
}

if (command === "update") {
  updateExpense()
}

if (command === "summary") {

  const monthIndex = process.argv.indexOf("--month");

  const month = Number(process.argv[monthIndex + 1]);

  if (month) {

    const filteredExpenses = expenses.filter(expense => {

      const expenseMonth =
        new Date(expense.date).getMonth() + 1;

      return expenseMonth === month;
    });

    const total = filteredExpenses.reduce(
      (accumulator, expense) => {
        return accumulator + expense.amount;
      },
      0
    );

    console.log(
      `Total de despesas do mês ${month}: $${total}`
    );

  } else {

    const total = expenses.reduce(
      (accumulator, expense) => {
        return accumulator + expense.amount;
      },
      0
    );

    console.log(`Total de despesas: $${total}`);
  }
}
