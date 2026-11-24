let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mobile", category: "Electronics", price: 20000, stock: 10 },
    { id: 3, name: "Shirt", category: "Clothing", price: 1000, stock: 2 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 8 },
    { id: 5, name: "Mouse", category: "Electronics", price: 500, stock: 4 }
];

// 1. Low stock products
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort products by price
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce(
        (total, p) => total + (p.price * p.stock), 0
    );
}

// 4. Group products by category
function groupByCategory() {
    return products.reduce((groups, p) => {
        if (!groups[p.category]) {
            groups[p.category] = [];
        }

        groups[p.category].push(p);
        return groups;
    }, {});
}

console.log("Low Stock:", getLowStockProducts());

console.log("Sorted Products:", sortProductsByPrice());

console.log("Inventory Value:", calculateTotalInventoryValue());

console.log("Grouped Products:", groupByCategory());