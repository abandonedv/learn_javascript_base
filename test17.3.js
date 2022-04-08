let str = "<span class>='clock'>12:34</span>";

// includes - поиск подстроки

console.log(str.includes("span"));
console.log(str.includes("<span>"));
console.log(str.includes("clock", 20));

console.log("---");

// startsWith & endsWith

console.log(str.startsWith("span"));
console.log(str.startsWith("<span"));
console.log(str.endsWith("span>"));

console.log("---");

// slice

console.log(str.slice(0, 5));
console.log(str.slice(6, 11));
console.log(str.slice(12));
console.log(str.slice(-7, -1));

console.log("---");

// substr

console.log(str.substr(6, 13));
console.log(str.substr(12));


