"use strict";

// setTimeout

function createMsg() {
    let msg = "Hello";
    console.log(msg);
}

setTimeout(createMsg, 2000); // Hello

function createMsg1(msg) {
    console.log(msg);
}

setTimeout(createMsg1, 2000, "hi") // hi