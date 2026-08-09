class Product {
    readonly productId: number;
    productName: string;
    price: number;

    static storeName: string = "Mega Mart";

    constructor(id: number, name: string, price: number) {
        this.productId = id;
        this.productName = name;
        this.price = price;
    }

    displayProduct(): void {
        console.log("Store:", Product.storeName);
        console.log("Product ID:", this.productId);
        console.log("Product:", this.productName);
        console.log("Price: ₹" + this.price);
    }
}

const product = new Product(101, "Keyboard", 1200);
product.displayProduct();