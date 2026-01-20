//type aliase
type User = {
  name: string;
  age: number;
};

const student: User = {
  name: "Alice",
  age: 21
};

const student2: User = {
  name: "Abd",
  age: 22
};

function printUser(user: { name: string, age: number; }): void {
  console.log(`${user.name} is ${user.age} years old.`);
}
printUser(student);
printUser(student2);



//prodcut type
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};

const item1: Product = {
  id: 1,
  name: "laptop",
  price: 60000,
  description: "A high-performance laptop"
};

const item2: Product = {
  id: 2,
  name: "Vivo x300",
  price: 75000,
  description: "A high-performance laptop"
};

const item3: Product = {
  id: 3,
  name: "Honor",
  price: 45000,
};

console.log(item1, item2, item3);

