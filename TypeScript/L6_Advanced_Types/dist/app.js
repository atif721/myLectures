"use strict";
// <------- Union & Intersection type ------->
Object.defineProperty(exports, "__esModule", { value: true });
function getProducts(id) {
    console.log(`Fetching product with id ${id}`);
}
const adminUser = {
    id: "24441221",
    name: "Atif",
    isAdmin: false
};
function userPrint(user) {
    console.log(`Id: ${user.id}\nName: ${user.name}\nAdmin: ${user.isAdmin}`);
}
function handleAction(action) {
    console.log(`Action: ${action}`);
}
// handleAction("start");
// handleAction("reset");
// <------- type narrowing ------->
function log(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
// log("Hi, I am full-stack web developer");
// log(3.14167);
// handle form input
function processInput(input) {
    if (typeof input === "number") {
        console.log("Parsed as number: ", input * 2);
    }
    else {
        console.log("Parsed as string:", input.trimStart());
    }
}
// processInput("Hello World     ");
// processInput(22);
//# sourceMappingURL=app.js.map