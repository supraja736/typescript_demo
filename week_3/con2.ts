class Car {
    brand: string;
    model: string;
    price: number;

    constructor(brand: string, model: string, price: number) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    showCar(): void {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Price: ₹" + this.price);
    }
}

const car1 = new Car("Hyundai", "Creta", 1500000);
car1.showCar();