"use strict";

let n = 5;

for (let i = 1; i <= n; i++) {

    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

// Using var

for (var i = 1; i <= 4; i++) {

    var row = "";

    for (var j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}