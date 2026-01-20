"use strict";
// basic way to define a info card
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Atif",
    age: 21,
    isEnrolled: true,
    courses: ["C", "C++", "JAVA", "Python"],
    scores: [88, 99, 81, 85],
    info: ["Atif", 21, true]
};
const Atif = {
    name: "Atif",
    age: 23,
    isEnrolled: true,
    courses: ["C", "Python"],
    scores: [90, 100],
    info: ["Atif", 21, true]
};
function displayStudent(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Courses: ${student.courses.join(", ")}`);
}
const Employee1 = {
    name: "Alim Ullah",
    age: 24,
    gender: "Male",
    id: 2011123,
    isJunior: false,
    info: [2011123, "Alim Ullah", false]
};
function displayEmployee(employee) {
    console.log(`Name: ${employee.name}`);
    console.log(`Age: ${employee.age}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Junior: ${employee.isJunior}`);
}
displayEmployee(Employee1);
//# sourceMappingURL=practice.js.map