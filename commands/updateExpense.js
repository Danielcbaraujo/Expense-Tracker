const readExpenses = require("../utils/readExpenses");
const saveExpenses = require("../utils/saveExpenses");


function updateExpense(){
  const expenses =readExpenses();
  const idIndex = process.argv.indexOf("--id");
  const id = Number(process.argv[idIndex + 1]);

  const descriptionIndex = process.argv.indexOf("--description");
  const description = process.argv[descriptionIndex + 1];

  const amountIndex = process.argv.indexOf("--amount");
  const amount = Number(process.argv[amountIndex + 1]);

  const expense = expenses.find(expense => expense.id === id);
  if (!expense) {

    console.log(
      "Despesa não encontrada!"
    );

    process.exit();
  }

  if (description) expense.description = description;
  if (amount) expense.amount = amount;

   saveExpenses(expenses)

  console.log("Despesa atualizada com sucesso!");
}


module.exports = updateExpense;