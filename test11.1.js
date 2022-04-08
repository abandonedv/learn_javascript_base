"use strict";

let book = {
    title: "название",
    author: "автор",
    nPages: 0,
    price: 0
};

book.isSelled = false;
book.isSelled = true;

delete book.nPages; // можно удалить атрибут

console.log("nPages" in book); // false
console.log("author" in book); // true
