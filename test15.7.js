"use strict";

let emailsTo = "alex@m.ru; m2@m.com; pp@g.com; upr@g.ru";

// split

let arEmails = emailsTo.split("; ");

for (let email of arEmails)
    console.log(email);

// join

let strEmails = arEmails.join(", ");

console.log(strEmails)