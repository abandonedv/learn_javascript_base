"use strict";

// колекция Map

let user = {
    name: "JavaScript",
    type: "ES6"

};

let m = new Map();
m.set("string", "строка");
m.set(7, "простое число");
m.set(true, {descr: "boolean", value: true});
m.set(user, "объект user"); // используем объект в качестве ключа

console.log(m.get("string")); // строка
console.log(m.get(7)); // простое число
console.log(m.get(true)); // { descr: 'boolean', value: true }
console.log(m.get(user)) // объект user

console.log("---");

// еще один способ объявления

let car = new Map([
    ["model", "opel"],
    ["color", 0xff],
    ["price", 1000]
]);

console.log(car); // Map(3) { 'model' => 'opel', 'color' => 255, 'price' => 1000 }

console.log("---");

// Map на основе объекта

let book = {
    author: "Пушкин",
    title: "Онегин",
    pages: 100,
    price: 80
};

let lib = new Map(Object.entries(book));
console.log(lib)
/*
Map(4) {
  'author' => 'Пушкин',
  'title' => 'Онегин',
  'pages' => 100,
  'price' => 80
}
 */

console.log("---");

// из массива создать обьект

let prices = Object.fromEntries([
    ["banana", 1],
    ["orange", 2],
    ["meat", 4]
]);

console.log(prices) // { banana: 1, orange: 2, meat: 4 }
