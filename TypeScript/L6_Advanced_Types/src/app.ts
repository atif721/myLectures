// <------- Union & Intersection type ------->

// Union type (|)
// let value: string | number;

type ProductID = string | number;
function getProducts(id: string | number) {
  console.log(`Fetching product with id ${id}`);
}
// getProducts("abc_123");

// Intersection type (&)
type User = {
  id: string;
  name: string;
};

type Admin = {
  isAdmin: boolean;
};

type AdminUser = User & Admin;

const adminUser: AdminUser = {
  id: "24441221",
  name: "Atif",
  isAdmin: false
};

function userPrint(user: AdminUser) {
  console.log(`Id: ${user.id}\nName: ${user.name}\nAdmin: ${user.isAdmin}`);
}
// userPrint(adminUser);

// <------- Literal Types ------->

type Action = "start" | "pause" | "stop" | "submit" | "reset";

function handleAction(action: Action) {
  console.log(`Action: ${action}`);
}
// handleAction("start");
// handleAction("reset");

// <------- type narrowing ------->

function log(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// log("Hi, I am full-stack web developer");
// log(3.14167);

// handle form input

function processInput(input: string | number) {
  if (typeof input === "number") {
    console.log("Parsed as number: ", input * 2);
  } else {
    console.log("Parsed as string:", input.trimStart());
  }
}
// processInput("Hello World     ");
// processInput(22);

