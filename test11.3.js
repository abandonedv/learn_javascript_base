// имя атрибута можно задавать с помощью атрибута
let newKey = "color";

let car = {
    model: "toyota",
    [newKey]: "black",
};

console.log(car[newKey]);