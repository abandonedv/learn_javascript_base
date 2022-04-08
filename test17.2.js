"use strict";

// indexOf

let str = "<span class>='clock'>12:34</span>";
let indx1 = str.indexOf("clock");
let indx2 = str.indexOf("span", 2);
let indx3 = str.indexOf("div");

console.log(indx1, indx2, indx3);

// lastIndexOf

let indx = str.lastIndexOf("span");
console.log(indx);
