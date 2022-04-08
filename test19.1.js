"use strict";

let cars = ["yaguar", "porshe", "mercedes"];

// деструктурирующее присваивание
let [car1, , car3] = cars;
console.log(car1, car3); // yaguar mercedes

let [fr1, fr2, ...last] = ["Груша", "Слива", "Яблоко", "Персик", "Виноград"];
console.log(fr1, fr2, last); // Груша Слива [ 'Яблоко', 'Персик', 'Виноград' ]

console.log("---");

// можно с объектом

let args = {
    width: 100,
    height: 200,
    tag: "div",
    class_: "div_id"
};

let {tag, width, height} = args;
console.log(tag, width, height); // div 100 200

console.log("---");

// если хотим чтобы имя переменной не совпадало с именем арибута

let {tag: t, width: w, height: h = 0} = args;
console.log(t, w, h); // div 100 200

console.log("---");

// деструктурирующее присваивание после объявления переменных

let class_;
({class_} = args);
console.log(class_) // div_id
