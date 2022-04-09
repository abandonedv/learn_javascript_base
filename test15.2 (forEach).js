"use strict";

let dig = [1, 2, 3, 4, 5, 6, 7];

// forEach

dig.forEach( (item, index, array) => {
    if (item % 2 != 0) array[index] = 1;
});

console.log(dig);