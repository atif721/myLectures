"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name = "user", age = 0) {
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
    accountName;
    balance;
    accountType;
    constructor(accountName, balance, accountType) {
        this.accountName = accountName;
        this.balance = balance;
        this.accountType = accountType;
    }
    showBalance() {
        console.log(`Balance for account ${this.accountName} is ${this.balance}`);
    }
}
const account1 = new BankAccount("Atif", 15000, "savings");
// account1.showBalance();
// <------- Inheritance -------->
class Aniaml {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Aniaml {
    bark() {
        console.log("Ghew Ghew");
    }
}
const myDog = new Dog("Tommy");
class Car {
    start() {
        console.log(`Car is started....`);
    }
    ;
    stop() {
        console.log(`Car is stopped....`);
    }
    ;
}
const myCar = new Car();
myCar.start();
myCar.stop();
//# sourceMappingURL=app.js.map