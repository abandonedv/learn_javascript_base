"use strict";

let car = new Map([
    ["model", "opel"],
    ["color", 0xff],
    ["price", 1000]
]);

// перебор

car.forEach((value, key) => {
    console.log(`car[${key}] = ${value}`)
})

/*
car[model] = opel
car[color] = 255
car[price] = 1000
 */

for(let value of car) {
    console.log(value)
}

/*
[ 'model', 'opel' ]
[ 'color', 255 ]
[ 'price', 1000 ]
 */