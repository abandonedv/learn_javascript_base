"use strict";

let age = prompt("Сколько вам лет?", 18)

let setAccess = null;

if (age < 18) {
    setAccess = function () {
        console.log("Доступ запрещен: вы слишком молоды");
    }
}
else {
    setAccess = function () {
        console.log("Доступ разрешен");
    }
}

setAccess();