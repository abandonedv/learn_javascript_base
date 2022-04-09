"use strict";

// при присваивании копируются ссылки а не сами объекты
let book = {
    title: "название",
    author: "автор",
    nPages: 0,
    price: 0
};

let my_lib = book;

my_lib.title = "Муму";

console.log(book.title) // Муму