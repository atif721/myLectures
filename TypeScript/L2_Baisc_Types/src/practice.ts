// basic way to define a info card

// const student1 = {
//   name: "Atif",
//   age: 21,
//   isEnrolled: true,
//   courses: ["C", "C++", "JAVA", "Python"],
//   scores: [88, 99, 81, 85],
//   info: ["Atif", 21, true]
// };

// but in typescript way we can define manual types

type Student = {
  name: string,
  age: number,
  isEnrolled: boolean,
  courses: string[],
  scores: number[],
  info: [string, number, boolean];
};


const student1: Student = {
  name: "Atif",
  age: 21,
  isEnrolled: true,
  courses: ["C", "C++", "JAVA", "Python"],
  scores: [88, 99, 81, 85],
  info: ["Atif", 21, true]
};

const Atif: Student = {
  name: "Atif",
  age: 23,
  isEnrolled: true,
  courses: ["C", "Python"],
  scores: [90, 100],
  info: ["Atif", 21, true]
};

function displayStudent(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Courses: ${student.courses.join(", ")}`);
}
// displayStudent(Atif);

type Employee = {
  name: string;
  age: number;
  gender: string;
  id: number;
  isJunior: boolean;
  info: [number, string, boolean];
};

const Employee1: Employee = {
  name: "Alim Ullah",
  age: 24,
  gender: "Male",
  id: 2011123,
  isJunior: false,
  info: [2011123, "Alim Ullah", false]
};


function displayEmployee(employee: Employee) {
  console.log(`Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`ID: ${employee.id}`);
  console.log(`Junior: ${employee.isJunior}`);
}
displayEmployee(Employee1);