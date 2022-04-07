// функция ссылается на внешний контекст
function showMessage(from, text){
    email += "+";
    let msg = from + " " + email + ": " + text;
    console.log(msg);
}

email = "vadim@mail.ru"
showMessage("vadim","Вызов фунуции 1")
showMessage("vadim","Вызов фунуции 2")