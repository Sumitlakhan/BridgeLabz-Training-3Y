
let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);

    function showCount() {
        console.log("Current Count inside nested function:", count);
    }

    showCount();
}

increment();
increment();
decrement();
decrement();

