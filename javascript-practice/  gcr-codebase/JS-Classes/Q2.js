"use strict";

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

async function main() {

    let name = await ask("Enter Name: ");
    let email = await ask("Enter Email: ");
    let phone = await ask("Enter Phone: ");
    let password = await ask("Enter Password: ");

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^\d{10}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/;

    let valid = true;

    if (!namePattern.test(name)) {
        console.log("Invalid Name");
        valid = false;
    }

    if (!emailPattern.test(email)) {
        console.log("Invalid Email");
        valid = false;
    }

    if (!phonePattern.test(phone)) {
        console.log("Invalid Phone");
        valid = false;
    }

    if (!passwordPattern.test(password)) {
        console.log("Invalid Password");
        valid = false;
    }

    if (valid) {
        console.log("\nRegistration Successful!");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
    } else {
        console.log("\nPlease enter valid details.");
    }

    rl.close();
}

main();