class Person {
  name: string;
  age: number;

  constructor(name: string = "user", age: number = 0) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}. I'm ${this.age} years old`);
  }
}

const user = new Person("Atif", 21);
// user.greet();


const user2 = new Person("Sabbir", 23);
// user2.greet();


const user3 = new Person();
// user3.greet();




class BankAccount {
  public accountName: string;
  private balance: number;
  protected accountType: string;

  constructor(accountName: string, balance: number, accountType: string) {
    this.accountName = accountName;
    this.balance = balance;
    this.accountType = accountType;
  }

  public showBalance() {
    console.log(`Balance for account ${this.accountName} is ${this.balance}`);
  }
}

const account1 = new BankAccount("Atif", 15000, "savings");
// account1.showBalance();

// <------- Inheritance -------->

class Aniaml {

  constructor(public name: string) {
  }

  public move() {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Aniaml {
  public bark() {
    console.log("Ghew Ghew");
  }
}

const myDog = new Dog("Tommy");
// myDog.move();
// myDog.bark();



// <------- implements keyword -------->

interface Driveable {
  start(): void;
  stop: () => void;
}

class Car implements Driveable {
  public start() {
    console.log(`Car is started....`);
  };

  public stop() {
    console.log(`Car is stopped....`);
  };
}

const myCar = new Car();
myCar.start();
myCar.stop();