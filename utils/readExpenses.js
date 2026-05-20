const fs = require("fs");

function readExpenses() {

  const data = fs.existsSync("expenses.json") ? fs.readFileSync("expenses.json", "utf-8") : "[]";

  return JSON.parse(data);
}

module.exports = readExpenses;