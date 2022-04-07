// callback - функции
function agreeCookies(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

function agreeYes() {
    console.log("Вы приняли соглашение о cookies");
}

function agreeNo() {
    console.log("Вы отказались от использования cookies");
}

agreeCookies("Наш сай использует cookies. Нам нужно ваше согласие...",
    yes=agreeYes,
    no=agreeNo)