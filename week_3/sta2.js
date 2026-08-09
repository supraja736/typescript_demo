"use strict";
class Product {
    productId;
    productName;
    price;
    static storeName = "Mega Mart";
    constructor(id, name, price) {
        this.productId = id;
        this.productName = name;
        this.price = price;
    }
    displayProduct() {
        console.log("Store:", Product.storeName);
        console.log("Product ID:", this.productId);
        console.log("Product:", this.productName);
        console.log("Price: ₹" + this.price);
    }
}
const product = new Product(101, "Keyboard", 1200);
product.displayProduct();
