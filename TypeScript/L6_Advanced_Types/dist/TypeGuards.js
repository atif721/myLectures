"use strict";
// Type Guards:  typeof, in operator and instanceof
Object.defineProperty(exports, "__esModule", { value: true });
// typeof Type Guard
function display(value) {
    if (typeof value === "string") {
        console.log("I'm a string: " + value.toUpperCase());
    }
    else {
        console.log("I'm a number: " + value.toFixed(2));
    }
}
display("Full-Stack web developer");
display(52559.61234946964456);
function move(vehicles) {
    if ("drive" in vehicles) {
        vehicles.drive();
    }
    else {
        vehicles.sail();
    }
}
;
const car = {
    drive() {
        console.log("Car is driving...!");
    }
};
const boat = {
    sail() {
        console.log("Boat is sailing...!");
    },
};
move(car);
move(boat);
// instance of Type Guard
class Dog {
    bark() {
        console.log("Ghew Ghew");
    }
    ;
}
class Cat {
    meaw() {
        console.log("Meaw Meaw");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meaw();
    }
}
const newDog = new Dog();
const newCat = new Cat();
makeSound(newDog);
makeSound(newCat);
//# sourceMappingURL=TypeGuards.js.map