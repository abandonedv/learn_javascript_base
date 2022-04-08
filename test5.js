"use strict";

let x = "4", y = "not a number", z = true, t = false, u = undefined;

console.log(typeof +x, typeof +y, typeof +z, typeof +t, typeof +u); // number number number number number

console.log(+x, +y, +z, +t, +u); // 4 NaN 1 0 NaN
