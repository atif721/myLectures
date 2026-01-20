
// defining a type alias

type User = {
  name: string;
  age: number;
  email: string;
};

// type cannot be extended
// type User = {
//   address: string;
// };

// defining a interface

interface UserP {
  name: string;
  age: number;

}

// interface can be extended
interface UserP {
  email: string;
}

interface UserP {
  address: string;
}


const p: UserP = {
  name: "Atif",
  age: 21,
  email: "araf6222@gmail.com",
  address: "#H-52/1 R-13"
};

function displayProfile(user: UserP) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Address: ${user.address}`);
  console.log(`Email: ${user.email}`);
}
displayProfile(p);

/* when to use which

1. designing public APIs: interface
2. for simple object:use both
3. Union and Intersection types: use type
4. primitive or functions: use type {type ID = number}
5. flexibility: use interface{extends} and type{union and intersection}
6. for complex object: use interface
*/

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Tommy",
  breed: "Golden Retriever"
};
console.log(`\nDogName: ${myDog.name}\nBreedColor: ${myDog.breed}`);