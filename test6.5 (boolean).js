"use strict";

let x = 4, y = true, z = false;

if (!0) console.log("0 дает false"); // 0 дает false
if ("0") console.log("строка 0 дает true"); // строка 0 дает true
if (!"") console.log("пустая строка дает false"); // пустая строка дает false
if (y) console.log("y = true дает true"); // y = true дает true
if (!z) console.log("z = false дает false"); // z = false дает false
