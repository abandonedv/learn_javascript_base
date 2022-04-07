// function expression (функциональное выражение)
let showMsg = function () {
    console.log("Hello");
};

let show = showMsg; // ссылка на функцию
show()

console.log(show);
console.log(typeof show);