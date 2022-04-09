"use strict";

// остаточные аргументы

function sumAll(...args) {
    let sum = 0;
    for(let val of args)
        sum += val;
    return sum;
}

console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3, 4)); // 10

// оператор расширения

let items = [1, 2, 3, 4, 5];
let digs = [-1, 0, 6, 10, 101];

let max = Math.max(...items, 1000, ...digs);
console.log(max); // 1000

// можно объединять массивы

let new_ar = [...items, ...digs];
console.log(new_ar);
// [
//    1, 2, 3,  4,   5,
//   -1, 0, 6, 10, 101
// ]