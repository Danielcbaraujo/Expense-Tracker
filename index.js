const readExpenses = require("./utils/readExpenses");
const saveExpenses = require("./utils/saveExpenses");
const addExpense = require("./commands/addExpense");
const listExpenses = require("./commands/listExpenses");
const deleteExpense = require("./commands/deleteExpense");
const updateExpense = require("./commands/updateExpense");
const summaryExpense = require("./commands/summaryExpense");
const command = process.argv[2];
const expenses = readExpenses();

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
  summaryExpense();
}

if (!description) {

  console.log(
    "Erro: informe uma descrição."
  );

  process.exit();
}
