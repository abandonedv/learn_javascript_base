"use strict";

// можно задавать ключи из нескольких слов
let book = {
    title: "название",
    author: "автор",
    nPages: 0,
    "size book": {height: 100, width: 20}
};

// и менять из значения обращаясь как к словарю
book["size book"] = {height: 10, width: 2};
console.log(book["size book"]); // { height: 10, width: 2 }
