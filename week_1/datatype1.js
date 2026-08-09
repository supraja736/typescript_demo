"use strict";
let username = "Supraja";
let age = 20;
let isMember = true;
console.log("DataType of username: " + typeof username);
console.log("DataType of age: " + typeof age);
console.log("DataType of isMember: " + typeof isMember);
function displayDetails(name, age, active) {
    console.log(`Username : ${username}`);
    console.log(`age : ${age}`);
    console.log(`Active : ${isMember}`);
}
displayDetails(username, age, isMember);
