"use strict";

// колекция Set

let guests = new Set();

let alex = { name: "Alexey", old: 25 };
let oleg = { name: "OLeg", old: 32 };
let masha = { name: "Masha", old: 18 };

guests.add(alex);
guests.add(oleg);
guests.add(masha);
guests.add(alex);
guests.add(masha);

guests.forEach( (item) => {
    console.log(item.name + ": " + item.old);
})

/*
Alexey: 25
OLeg: 32
Masha: 18
 */