"use strict";

// перебираем атрибуты объекта
let book = {
    title: "Муму",
    author: "Тургенев",
    price: 100,
    nPages: 282
};

for (let key in book) {
    console.log(key + ": " + book[key]);
}