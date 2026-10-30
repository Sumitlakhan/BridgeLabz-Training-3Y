"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {

    try {
        let name = employees[i].name;
        let salary = Number(employees[i].salary);
        let years = Number(employees[i].years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or years");
        }

        let bonus;

        if (years > 3) {
            bonus = salary * 0.1;
        } else {
            bonus = salary * 0.05;
        }

        console.log(`Name: ${name}`);
        console.log(`Salary: ${salary}`);
        console.log(`Experience: ${years}`);
        console.log(`Bonus: ${bonus}`);
        console.log("------------------");

    } catch (error) {
        console.log("Error:", error.message);
    }
}