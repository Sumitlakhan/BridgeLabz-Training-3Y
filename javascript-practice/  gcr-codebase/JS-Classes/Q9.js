"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(coupon) {
        if (!/^(SAVE20|DISC10)$/.test(coupon)) {
            console.log("Invalid Coupon");
            return;
        }

        let discount = 0;

        if (coupon === "SAVE20") {
            discount = 20;
        } else if (coupon === "DISC10") {
            discount = 10;
        }

        let total = this.getTotal();
        let finalTotal = total - (total * discount / 100);

        console.log("Total:", total);
        console.log("Discount:", discount + "%");
        console.log("Final Total:", finalTotal);
    }
}

let cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Total:", cart.getTotal());

cart.applyCoupon("SAVE20");