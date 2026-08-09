let product: string = "Smartphone";
let price: number = 30000;
let discountAvailable: boolean = true;

let finalPrice: number = discountAvailable ? price - 3000 : price;

console.log(`Product: ${product}`);
console.log(`Original Price: ₹${price}`);
console.log(`Discount Available: ${discountAvailable}`);
console.log(`Final Price: ₹${finalPrice}`);