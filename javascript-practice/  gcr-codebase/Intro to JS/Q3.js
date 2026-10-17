
let expenses = {
    food: 3000,
    travel: 1500,
    rent: 5000,
    bills: 1000,
    leisure: 500
};

let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

let average = total / Object.keys(expenses).length;
let finalAmount = total;
finalAmount += total * 0.10;

console.log("Total Expenses: ₹" + total.toFixed(2));
console.log("Average Expenses: ₹" + average.toFixed(2));
console.log("Final Amount with Tax: ₹" + finalAmount.toFixed(2));
