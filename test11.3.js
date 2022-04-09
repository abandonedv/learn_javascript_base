"use strict";

// имя атрибута можно задавать с помощью переменной
let newKey = "color";

let car = {
    model: "toyota",
    [newKey]: "black",
};

console.log(car[newKey]); // black