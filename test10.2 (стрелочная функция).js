"use strict";

// стрелочная функция
let anonym1 = () => "срелочная функция";
console.log(anonym1()) // срелочная функция

// если используем скобки то нужен return
let anonym2 = () => { return 11 + 12 };
console.log(anonym2()) // 23

// с аргументами
let anonym3 = (from, to) => from + " -> " + to


console.log(anonym3("vadim", "misha")) // vadim -> misha