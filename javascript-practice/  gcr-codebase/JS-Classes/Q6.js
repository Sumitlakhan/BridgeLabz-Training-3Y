"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Sara", "HR", 25000),
    new Employee(3, "Kiran", "Sales", 35000),
    new Employee(4, "Ravi", "IT", 40000),
    new Employee(5, "Neha", "Finance", 32000)
];

employees[0].applyBonus(10);

employees.forEach(emp => {
    console.log(emp.name, emp.getAnnualSalary());
});

let total = employees.reduce((sum, emp) => {
    return sum + emp.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", total);