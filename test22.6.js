"use strict";

// bind

let myMath = {
    nameObj: "myMath",
    sum(...args) {
        return this.nameObj + ": " + args.reduce((val, prevVal) => prevVal += val, 0);
    }
};

let sum = myMath.sum.bind(myMath, 1, 2);
console.log(sum(3, 4, 5)); // myMath: 15