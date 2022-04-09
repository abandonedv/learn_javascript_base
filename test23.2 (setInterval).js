"use strict";

// setInterval

function createClock(seconds) {
    let sec = seconds;

    return function () {
        sec++;
        console.log("Прошло " + sec + " секунд(а)");
    }
}

let clock = createClock(0);
let idClock = setInterval(clock, 1000);
setTimeout(function () {
    clearInterval(idClock)
}, 5000);