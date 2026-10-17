
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    discountedTotal += product.price * (1 - discount);
}

if (total > 50000) {
    discountedTotal *= 0.95;
}

console.log("Original Cart Total: ₹" + total.toFixed(2));
console.log("Final Cart Total: ₹" + discountedTotal.toFixed(2));
console.log("Total Savings: ₹" + (total - discountedTotal).toFixed(2));

