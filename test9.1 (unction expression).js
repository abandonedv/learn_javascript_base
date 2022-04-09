"use strict";

// function expression (функциональное выражение)
let showMsg = function () {
    console.log("Hello");
};

let show = showMsg; // ссылка на функцию
show() // Hello

console.log(show); // [Function: showMsg]
console.log(typeof show); // function