"use strict";
// defining a type alias
Object.defineProperty(exports, "__esModule", { value: true });
const p = {
    name: "Atif",
    age: 21,
    email: "araf6222@gmail.com",
    address: "#H-52/1 R-13"
};
function displayProfile(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Address: ${user.address}`);
    console.log(`Email: ${user.email}`);
}
displayProfile(p);
const myDog = {
    name: "Tommy",
    breed: "Golden Retriever"
};
console.log(`\nDogName: ${myDog.name}\nBreedColor: ${myDog.breed}`);
//# sourceMappingURL=app.js.map