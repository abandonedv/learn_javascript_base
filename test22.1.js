"use strict";

// свойства функций

// name

function showMessage(msg) {
    console.log(msg);
}

console.log(showMessage.name); // showMessage

console.log("---");

let my_func = function (msg) {
    console.log(msg);
}
console.log(my_func.name); // my_func

console.log("---");

let car = {
    go() {},
    stop: function () {}
};

console.log(car.go.name); // go
console.log(car.stop.name); // stop
