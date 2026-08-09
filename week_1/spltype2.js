"use strict";
let order = "ORD101";
console.log("Order ID:", order);
order = true;
console.log("Order Confirmed:", order);
let quantity = 3;
if (typeof quantity === "number") {
    console.log("Total Items:", quantity);
}
function orderStatus(product) {
    console.log(`Product Ordered: ${product}`);
}
orderStatus("Wireless Mouse");
