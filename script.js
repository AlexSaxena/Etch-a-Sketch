console.log("Greetings, General Kenobi");

let gridContainer = document.getElementById("grid-container");
let btnErase = document.getElementById("btn-erase");
let btnClear = document.getElementById("btn-clear");
let btnRed = document.getElementById("btn-red");
let boxes = document.getElementsByClassName("generatedBox2");
let slider = document.getElementById("slider-boxes");
let sliderOutputValue = document.getElementById("slider-boxes-value");

let row = 8;
let fullRange = row * row;

addBoxes(row);

// Checks and changes slider value on movement
slider.oninput = function () {
  console.log(slider.value);
  removeDivChildren();
  addBoxes(slider.value);
  sliderOutputValue.innerText = `${slider.value}x${slider.value}`;
};

//changeColor();
trailing(fullRange, "red");

// Function for Colour trailing over Divs
function trailing(boxRange, colour) {
  for (let i = 0; i < boxRange; i++) {
    boxes.item(i).addEventListener("mouseover", () => {
      boxes.item(i).style.backgroundColor = colour;
    });
  }
}

// Btn Event to change colour of all boxes to white
btnClear.addEventListener("click", () => {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "white";
  }
});

// Btn Event for Erasing colour trail
btnErase.addEventListener("click", () => {
  trailing(fullRange, "white");
});

// Btn Event for trailing colour Red
btnRed.addEventListener("click", () => {
  trailing(fullRange, "red");
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
