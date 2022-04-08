"use strict";

let ar = ["Я", "смотрю", "этот", "обучающий", "урок", 0, false, null];

// indexOf (поиск индекса начиная с начала)
let res1 = ar.indexOf("смотрю", 0);
console.log(res1); // 1

// lastIndexOf (поиск индекса начиная с конца)
let res2 = ar.lastIndexOf(false, -1)
console.log(res2); // 6

// includes (проверяем наличие)
let res3 = ar.includes(0, 3); // ищем 0 начиная с индекса 3
console.log(res3); // true

