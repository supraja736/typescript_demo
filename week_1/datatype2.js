"use strict";
let product = "Smartphone";
let price = 30000;
let discountAvailable = true;
let finalPrice = discountAvailable ? price - 3000 : price;
console.log(`Product: ${product}`);
console.log(`Original Price: ₹${price}`);
console.log(`Discount Available: ${discountAvailable}`);
console.log(`Final Price: ₹${finalPrice}`);
