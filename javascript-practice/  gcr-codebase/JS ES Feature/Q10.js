"use strict";

function outer() {

    console.log(count);

    var count = 5;

    function inner() {

        console.log(count);

        var count = 10;

        console.log(count);
    }

    inner();
}

outer();

// Arrow function

function outer2() {

    let count = 5;

    const inner = () => {

        console.log(count);
    };

    inner();
}

outer2();