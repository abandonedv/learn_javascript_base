"use strict"

// показывает сообщение
alert("Hello")

// показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null,
// если была нажата кнопка «Отмена» или Esc с клавиатуры
let x = prompt("How old are you", 18);
console.log(x);

// показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK,
// и false, если нажата кнопка «Отмена» или Esc с клавиатуры.
confirm("Are you OK?")