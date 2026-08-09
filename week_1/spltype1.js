"use strict";
let vehicle = "Car";
console.log("Vehicle:", vehicle);
vehicle = 2025;
console.log("Model Year:", vehicle);
let speed = 120;
if (typeof speed === "number") {
    console.log("Maximum Speed:", speed + " km/h");
}
function vehicleInfo(name) {
    console.log(`Vehicle Name: ${name}`);
}
vehicleInfo("Honda City");
