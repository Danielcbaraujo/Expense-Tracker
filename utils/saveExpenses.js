const fs = require("fs");

function saveExpenses(expenses) {

  fs.writeFileSync(
    "expenses.json",
    JSON.stringify(expenses, null, 2)
  );
}

module.exports = saveExpenses;