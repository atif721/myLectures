
const car = {
    name: "BMW",
    model: "X7 LI",
    weight: "850kg",
    color: "Diamond Gray",
    start: function(){
        document.write("<h1 style='margin:50px;'>" + "car has started" + "</h1>");
        console.log("car has started");
    },
    drive: function(){
        document.write("<h1 style='margin:50px;'>" + "car is driving" + "</h1>");
        console.log("car is driving");
    },
};

document.write("<h1 style='color:gray;margin:50px;'>" + car.color + "</h1>");
document.write("<h1 style='color:blue;margin:50px;'>" + car['weight'] + "</h1>");

console.log(car.color);
car.start();
car.drive();

const Person = {
    firstName: "Abdullah",
    lastName: "Atif",
    id: 241311051,
    fullName: function(){
        return (this.firstName + " " + this.lastName + "   ID : " + this.id);
    }
};

document.write("<pre><h1 style='color:green;margin-left:50px;'>" + Person.fullName() + "</h1></pre>");

function displayDate(){
    // Date();
    document.getElementById("demo").innerHTML = Date();
    // document.getElementsByClassName("butn").innerHTML = Date();
    // this.innerHTML = Date();
}