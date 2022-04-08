"use strict";

let cars = ["toyota", "opel", "reno"];

// map

let res = cars.map(function (item) {
    return item.length;
});

console.log(res); // [ 6, 4, 4 ]