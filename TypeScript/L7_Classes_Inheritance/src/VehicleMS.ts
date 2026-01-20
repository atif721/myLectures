interface Vehicle {
  brand: string;
  speed: number;
  move(): void;
}

class Car implements Vehicle {
  protected year: number = 2025;
  constructor(public brand: string, public speed: number) {
  }

  move(): void {
    console.log(`The ${this.brand} car is moving at ${this.speed} km/h`);
  }
}

class FuelCar extends Car {
  public parked() {
    console.log(`${this.brand}(Model-${this.year}) is parked`);
  }
}

const BMW = new FuelCar("BMW", 190);
BMW.move();
BMW.parked();