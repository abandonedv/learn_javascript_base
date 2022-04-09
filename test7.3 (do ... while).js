"use strict";

// do ... while

const PSW = "password";
let psw = null;
do {
    psw = prompt("Enter the password", "");
}
while (psw !== PSW);
console.log("RIGHT!!!")