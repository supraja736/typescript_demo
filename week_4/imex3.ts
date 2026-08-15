export class Product {
    constructor(
        public productName: string,
        public price: number
    ) {}

    display(): void {
        console.log("Product:", this.productName);
        console.log("Price:", this.price);
    }
}