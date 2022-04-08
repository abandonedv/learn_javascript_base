console.log("Америка" > "Japan"); // true

// codePointAt

console.log("А".codePointAt(0)); // 1040
console.log("J".codePointAt(0)); // 74
console.log("---");

// localeCompare

console.log("Америка".localeCompare("Japan")); // -1
console.log("---");

// trim

let str = "  vadim  ";
console.log(str.trim());
console.log("---");

// repeat

console.log(str.repeat(3));
