console.log("Greetings, General Kenobi");

let gridContainer = document.getElementById("grid-container");
let btnErase = document.getElementById("btn-erase");
let btnClear = document.getElementById("btn-clear");

addBoxes(4);

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
