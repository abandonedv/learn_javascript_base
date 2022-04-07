// push - добавить последний элемент

let ar = ["Яблоко", "Слива"];

ar.push("Груша");
console.log(ar);

// pop - удалить последний элемент и вернуть его

let deleted = ar.pop();
console.log(ar)
console.log(deleted);
console.log(ar)

// shift - удалить первый элемент и вернуть его

let deleted2 = ar.shift();
console.log(ar);
console.log(deleted2);
console.log(ar)

// unshift - добавить первый элемент

ar.unshift("Кокос")
console.log(ar)