"use strict";

let ar = ["Я", "смотрю", "этот", "обучающий", "урок"];

// splice
let test1 = ar.slice();
test1.splice(2, 2);
console.log(test1); // [ 'Я', 'смотрю', 'урок' ]

let test2 = ar.slice();
test2.splice(0, 3, "Это", "классный");
console.log(test2) // [ 'Это', 'классный', 'обучающий', 'урок' ]

let test3 = ar.slice();
test3.splice(3, 0, "интересный");
console.log(test3); // [ 'Я', 'смотрю', 'этот', 'интересный', 'обучающий', 'урок' ]

// slice - копия выбранного диапазона

let res1 = ar.slice(2, 4);
console.log(res1) // [ 'этот', 'обучающий' ]

let res2 = ar.slice(3);
console.log(res2) // [ 'обучающий', 'урок' ]

let res3 = ar.slice(-3);
console.log(res3) // [ 'этот', 'обучающий', 'урок' ]

// concat

let arr = [1, 2];
let res4 = arr.concat([3, 4]);
console.log(res4); // [ 1, 2, 3, 4 ]

let res5 = arr.concat([3, 4], [5, 6]); // [ 1, 2, 3, 4, 5, 6 ]
console.log(res5);
console.log(arr.concat([3, 4], 5, 6)); // [ 1, 2, 3, 4, 5, 6 ]

