const readExpenses =
  require("../utils/readExpenses");

const saveExpenses =
  require("../utils/saveExpenses");

function deleteExpense() {

  const expenses = readExpenses();

  const idIndex =
    process.argv.indexOf("--id");

  const id =
    Number(process.argv[idIndex + 1]);

  const filteredExpenses = expenses.filter(
    expense => expense.id !== id
  );

  saveExpenses(filteredExpenses);

  console.log(
    "Despesa removida com sucesso!"
  );
}

module.exports = deleteExpense;