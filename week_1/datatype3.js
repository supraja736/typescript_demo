"use strict";
let customerName = "Supraja";
let Age = 20;
let eligibleForAdultMovie = Age >= 18;
console.log(`Customer: ${customerName}`);
console.log(`Age: ${Age}`);
console.log(`Eligible: ${eligibleForAdultMovie}`);
if (eligibleForAdultMovie) {
    console.log(`${customerName} can watch the movie.`);
}
else {
    console.log(`${customerName} is not allowed to watch the movie.`);
}
