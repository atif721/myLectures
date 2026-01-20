let selectH1 = document.querySelector("H1");
// selectH1.innerHTML = `Hello Atif. How are you?`;

selectH1.innerHTML = `${selectH1.innerText} ATIF. How are you?`;

let boxes = document.querySelectorAll(".box");
// boxes[0].innerText = "New Text Added";
// boxes[1].innerText = "New Text Added in 2";
// boxes[2].innerText = "New Text Added in 3";

let num = 1;
for (box of boxes) {
  box.innerText = `Box Number : ${num}`;
  num++;
}

// Create elements

let learnButton = document.createElement("button");
learnButton.innerText = "Learn More";

let heroArea = document.querySelector(".hero");
heroArea.append(learnButton); // last
// heroArea.prepend(learnButton); // first
// heroArea.after(learnButton); // before
// heroArea.before(learnButton); // before

// Add element

// function addFruits(nameFruits) {
//   const li = document.createElement("li");
//   li.innerHTML = `${nameFruits}`;

//   document.querySelector("ul").appendChild(li);
// }

// addFruits("JackFruit");
// addFruits("Litchi");

// optimized

function addFruitsOp(nameFruits) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(nameFruits));

  document.querySelector("ul").appendChild(li);
}

addFruitsOp("JackFruit");
addFruitsOp("Litchi");

// Edit

const editFruits = document.querySelector("li:first-child");
// editFruits.innerText = "Guava";
editFruits.textContent = "Guava";

const newFruits = document.createElement("li");
newFruits.textContent = "Strawberry";
editFruits.replaceWith(newFruits);

// edit with tag
const editTag = document.querySelector("li:last-child");
// editTag.outerHTML = "<h1>Lemon</h1>";

// Remove
// editTag.remove();
