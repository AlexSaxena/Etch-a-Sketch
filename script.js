console.log("Greetings, General Kenobi");

let gridContainer = document.getElementById("grid-container");
let btnErase = document.getElementById("btn-erase");
let btnClear = document.getElementById("btn-clear");
let boxes = document.getElementsByClassName("generatedBox2");

let c = 16;
let fullRange = c * c;

addBoxes(c);

//changeColor();
trailing(fullRange);

// Function for Colour trailing over Divs
function trailing(i) {
  for (let a = 0; a < i; a++) {
    boxes.item(a).addEventListener("mouseover", () => {
      boxes.item(a).style.backgroundColor = "red";
    });
  }
}

// Btn Event to change colour of all boxes to white
btnClear.addEventListener("click", () => {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
  }
});

// function changeColor() {
//   for (var i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "black";
//   }
// }

// Appending Boxes to Container
function addBoxes(nrOfBoxes) {
  for (let i = 0; i < nrOfBoxes; i++) {
    let box = newDiv();

    gridContainer.appendChild(box);

    for (let j = 0; j < nrOfBoxes; j++) {
      let box2 = newDiv2();
      box.appendChild(box2);
    }
  }
}

// Create a new Div With class generatedBox
function newDiv() {
  let newDiv = document.createElement("div");
  newDiv.classList = "generatedBox";
  return newDiv;
}
function newDiv2() {
  let newDiv = document.createElement("div");
  newDiv.classList = "generatedBox2";
  return newDiv;
}
