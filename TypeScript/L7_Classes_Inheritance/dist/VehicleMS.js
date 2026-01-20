"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    speed;
    year = 2025;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h`);
    }
}
class FuelCar extends Car {
    parked() {
        console.log(`${this.brand}(Model-${this.year}) is parked`);
    }
}
const BMW = new FuelCar("BMW", 190);
BMW.move();
BMW.parked();
//# sourceMappingURL=VehicleMS.js.map