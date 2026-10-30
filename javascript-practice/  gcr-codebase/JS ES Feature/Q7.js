"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];

const num1 = 25;
const num2 = 0;

for (let i = 0; i < operations.length; i++) {

    try {

        let result;

        switch (operations[i]) {

            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Negative root not allowed");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new Error("Invalid Operation");
        }

        console.log(operations[i], "=", result);

    } catch (error) {
        console.log("Error:", error.message);
    }
}