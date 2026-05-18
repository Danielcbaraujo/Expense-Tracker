const fs=require("fs");
const command = process.argv[2];
const argument = process.argv[3];


if (command === "add") {
   addExpense()
}