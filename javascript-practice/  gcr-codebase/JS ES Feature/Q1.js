"use strict";

const apiData = ["25", "true", "false", "NaN", "   ", "100px", "3.14", null, undefined];

let valid = [];
let invalid = [];

for (let i = 0; i < apiData.length; i++) {

    let num = Number(apiData[i]);
    let bool = Boolean(apiData[i]);
    let str = String(apiData[i]);

    console.log("Original:", apiData[i]);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    if (Number.isFinite(num) && !(typeof apiData[i] === "string" && apiData[i].trim() === "")) {
        valid.push(num);
    } else {
        invalid.push(apiData[i]);
    }
}

console.log("Valid Numbers:", valid);
console.log("Invalid Values:", invalid);