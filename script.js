//creates a default
let gridSizeValue = 16;
createGrid(gridSizeValue);

//When clicked on randColor randomizeColor is toggle between true/false
let colorArray = ["black", "green", "blue", "yellow", "purple", "red", "pink"];
let randomColor = false;
let buttonRandColor = document.querySelector("#randColor");
buttonRandColor.addEventListener("click", () => {
  randomColor = !randomColor;
  console.log(randomColor);
});

//When clicked on clear the grid will be recreated based on gridSizeValue
let buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", () => {
  createGrid(gridSizeValue);
});

//when the size input is updated it will update the grid size
//clearing the last one and creating a new one right after
let gridSizeInput = document.querySelector("#sizeRange");
gridSizeInput.addEventListener("input", (e) => {
  gridSizeValue = parseInt(e.target.value);
  createGrid(gridSizeValue);
});

function createGrid(size) {
  let sketchPadDiv = document.querySelector("#sketchpad");
  sketchPadDiv.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let columnDiv = createRow();
    sketchPadDiv.appendChild(columnDiv);
    for (let j = 0; j < size; j++) {
      let divCell = createCell();
      columnDiv.appendChild(divCell);
    }
  }
}

//creates and return a single row
function createRow() {
  let columnDiv = document.createElement("div");
  columnDiv.className = "column";
  return columnDiv;
}

//create and return a single cell
function createCell() {
  let cellDiv = document.createElement("div");
  cellDiv.className = "cell";
  cellDiv.addEventListener("mouseover", () => {
    if (randomColor) {
      let color = colorArray[Math.floor(Math.random() * colorArray.length)];
      console.log(color);

      cellDiv.style.backgroundColor = color;
    } else {
      cellDiv.style.backgroundColor = "black";
    }
  });
  return cellDiv;
}
