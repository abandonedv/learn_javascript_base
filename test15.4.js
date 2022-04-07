let cars = [
    {model: "toyota", price: 1000},
    {model: "opel", price: 800},
    {model: "reno", price: 1200}
];

// find

let res = cars.find(item => item.price < 1000);

console.log(res) // { model: 'opel', price: 800 }

// findIndex

let res2 = cars.findIndex(item => item.price < 1000);

console.log(res2) // 1

// filter если нужно найти несколько

let res3 = cars.filter(item => item.price < 1200);

console.log(res3) // [ { model: 'toyota', price: 1000 }, { model: 'opel', price: 800 } ]
