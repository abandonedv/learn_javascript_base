"use strict";

// apply

let myMath = {
    nameObj: "myMath",
    sum(...args) {
        return this.nameObj + ": " + args.reduce((val, prevVal) => prevVal += val, 0);
    }
};

let sum = myMath.sum;
console.log(sum.apply(myMath, [1, 2, 3, 4])); // myMath: 10