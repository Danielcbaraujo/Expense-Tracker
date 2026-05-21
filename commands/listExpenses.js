const readExpenses = require("../utils/readExpenses");

function listExpenses() {

  const expenses = readExpenses();

  console.log(
    "ID | DESCRIPTION | AMOUNT | DATE"
  );

  for (const expense of expenses) {

    console.log(
      `${expense.id} | ${expense.description} | $${expense.amount} | ${expense.date}`
    );
  }
}

module.exports = listExpenses;