"use strict";

// анонимные функции
function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
agreeCookies("Наш сай использует cookies. Нам нужно ваше согласие...",
    function () { console.log("Вы приняли соглашение о cookies") },
    function () { console.log("Вы отказались от использования cookies") })