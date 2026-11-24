function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    return this.price - discount;
};

let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 5000);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(20));
console.log(p3.name, p3.applyDiscount(15));