const fs = require("fs");
const command = process.argv[2];

const data = fs.existsSync("expenses.json") ? fs.readFileSync("expenses.json", "utf-8") : "[]";
const expenses = JSON.parse(data);

if (command === "add") {
  const descriptionIndex = process.argv.indexOf("--description");
  const description = process.argv[descriptionIndex + 1];

  const amountIndex = process.argv.indexOf("--amount");
  const amount = process.argv[amountIndex + 1];

  const lastId = expenses.length > 0 ? expenses[expenses.length - 1].id : 0;

  const newExpense = {
    id: lastId + 1,
    description: description,
    amount: Number(amount),
    date: new Date().toISOString().split("T")[0]
  };

  expenses.push(newExpense);

  fs.writeFileSync(
    "expenses.json",
    JSON.stringify(expenses, null, 2)
  );

  console.log("Despesa adicionada com sucesso!");
}

if (command === "list") {
  console.log("ID | DESCRIPTION | AMOUNT | DATE");

  for (const expense of expenses) {
    console.log(`${expense.id} | ${expense.description} | $${expense.amount} | ${expense.date}`);
  }
}

if (command === "delete") {
  const idIndex = process.argv.indexOf("--id");
  const id = Number(process.argv[idIndex + 1]);

  const filteredExpenses = expenses.filter(expense => expense.id !== id);

  fs.writeFileSync(
    "expenses.json",
    JSON.stringify(filteredExpenses, null, 2)
  );

  console.log("Despesa removida com sucesso!");
}

if (command === "update") {
  const idIndex = process.argv.indexOf("--id");
  const id = Number(process.argv[idIndex + 1]);

  const descriptionIndex = process.argv.indexOf("--description");
  const description = process.argv[descriptionIndex + 1];

  const amountIndex = process.argv.indexOf("--amount");
  const amount = Number(process.argv[amountIndex + 1]);

  const expense = expenses.find(expense => expense.id === id);

  if (!expense) {
    console.log("Despesa não encontrada!");
    process.exit();
  }

  if (description) expense.description = description;
  if (amount) expense.amount = amount;

  fs.writeFileSync(
    "expenses.json",
    JSON.stringify(expenses, null, 2)
  );

  console.log("Despesa atualizada com sucesso!");
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
