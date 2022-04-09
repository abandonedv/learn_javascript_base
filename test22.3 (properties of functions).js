"use strict";

// можно создавать собственные свойсва функций

function createCounter() {
    function counter() {
        return counter.count++;
    }

    counter.count = 0;
    return counter;
}

let counter = createCounter();
console.log(counter());
