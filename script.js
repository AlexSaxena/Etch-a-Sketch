console.log("Greetings, General Kenobi");

let gridContainer = document.getElementById("grid-container");
let btnErase = document.getElementById("btn-erase");
let btnClear = document.getElementById("btn-clear");
let btnRed = document.getElementById("btn-red");
let boxes = document.getElementsByClassName("generatedBox2");
let slider = document.getElementById("slider-boxes");
let sliderOutputValue = document.getElementById("slider-boxes-value");

// Function for Colour trailing over Divs
function trailing(boxRange, colour) {
  for (let i = 0; i < boxRange; i++) {
    boxes.item(i).addEventListener("mouseover", () => {
      boxes.item(i).style.backgroundColor = colour;
    });
  }
}

// Checks and changes slider value on movement
slider.oninput = function () {
  let row = slider.value;
  removeDivChildren();
  addBoxes(row);
  trailing(boxes.length, "red");
  sliderOutputValue.innerText = `${row}x${row}`;
};

// Btn Event to change colour of all boxes to white
btnClear.addEventListener("click", () => {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
  }
});

// Btn Event for Erasing colour trail
btnErase.addEventListener("click", () => {
  trailing(boxes.length, "white");
});

// Btn Event for trailing colour Red
btnRed.addEventListener("click", () => {
  trailing(boxes.length, "red");
});

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

// Function for removing all children from gridContainer
function removeDivChildren() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
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
