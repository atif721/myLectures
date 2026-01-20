console.clear();

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   run() {
//     console.log(`${this.name} is running`);
//   }
// }

// const BMW = new Car('BMW X8', 2025);
// const Mercedes = new Car('AMG GT', 2020);
// console.log(BMW);
// BMW.run();
// Mercedes.run();

// --------- class inheritance -------------

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cname() {
    return this.cname;
  }
  set cname(value) {
    this.cname = value;
  }
  present() {
    return `I have a ${this.carname}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return `${this.present()} , it is a ${this.model}`;
  }
  static hello() {
    return 'Hello!! I am Static';
  }
}

let myCar = new Model('Ford', 'Mustang');
console.log(myCar.show());
console.log(Model.hello());
