"use strict";

// функции - конструкторы

function Book(title, author, price) {
    // this = {} (неявно)
    this.title = title;
    this.author = author;
    this.price = price;
    // return this (неявно)
}

let book = new Book("Муму", "Тургенев", 10);
console.log(book);