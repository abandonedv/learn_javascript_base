"use strict";

// Named Function Expression

let getName = function Name(name) {
    if(name) return name;
    else return Name("Вадим");
};

console.log(getName("Иван")); // Иван
let get = getName;
getName = null;
console.log(get()); // Вадим