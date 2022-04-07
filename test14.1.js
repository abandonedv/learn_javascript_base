let fruits = ["Яблоко", "Апельсин", "груша"];

// for ... of для массивов
for (let value of fruits) {
    value = null
    console.log(value);
}

// for ... of перебирает копии
for (let value of fruits) {
    console.log(value);
}

// если перебираем через индексы то будем перебирать сами объекты а не копии