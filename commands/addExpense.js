const readExpenses = require("../utils/readExpenses");

const saveExpenses = require("../utils/saveExpenses");

function addExpense() {
  const expenses = readExpenses();

  const descriptionIndex = process.argv.indexOf("--description");

  const description = process.argv[descriptionIndex + 1];

  const amountIndex = process.argv.indexOf("--amount");

  const amount = Number(process.argv[amountIndex + 1]);

  if (!description) {
    console.log("Erro: informe uma descrição.");

    process.exit();
  }

  if (!amount) {
    console.log("Erro: informe um valor.");

    process.exit();
  }

  if (isNaN(amount)) {
    console.log("Erro: valor inválido.");

    process.exit();
  }

  if (amount <= 0) {
    console.log("Erro: o valor deve ser maior que zero.");

    process.exit();
  }

  const lastExpense = expenses[expenses.length - 1];

  const id = lastExpense ? lastExpense.id + 1 : 1;

  const newExpense = {
    id,
    description,
    amount,
    date: new Date().toISOString().split("T")[0],
  };

  expenses.push(newExpense);

  saveExpenses(expenses);

  console.log(`Despesa adicionada com sucesso! (ID: ${id})`);
}

module.exports = addExpense;
