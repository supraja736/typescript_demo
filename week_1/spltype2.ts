let order: any = "ORD101";
console.log("Order ID:", order);

order = true;
console.log("Order Confirmed:", order);

let quantity: unknown = 3;

if (typeof quantity === "number") {
    console.log("Total Items:", quantity);
}

function orderStatus(product: string): void {
    console.log(`Product Ordered: ${product}`);
}

orderStatus("Wireless Mouse");