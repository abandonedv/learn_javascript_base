"use strict";

// деструктурирующее присваивание в функциях

function showMenu({title = "Untitled", width = 200, heigth = 100, items = []} = {}){
    console.log(title);
    console.log(width, heigth);
    console.log(items);
}

let args = {
    title: "Заголовок меню",
    items: ["Пункт 1", "Пункт 2", "Пункт 3"]
};

showMenu(args);
/*
Заголовок меню
200 100
[ 'Пункт 1', 'Пункт 2', 'Пункт 3' ]
 */