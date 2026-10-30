"use strict";

function demo(a, b) {

    let total = 10;

    console.log("A:", a);
    console.log("B:", b);
    console.log("Total:", total);

    let obj = { total: total };

    delete obj.total;

    console.log(obj);
}

demo(5, 10);