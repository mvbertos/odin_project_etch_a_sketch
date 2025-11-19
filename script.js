//creates a default
createGrid(16);

//when the size input is updated it will update the grid size
//clearing the last one and creating a new one right after
let gridSizeInput = document.querySelector("#range");
gridSizeInput.addEventListener("input", (e) => {
  console.log(parseInt(e.target.value));
  createGrid(parseInt(e.target.value));
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
    cellDiv.style.backgroundColor = "black";
  });
  return cellDiv;
}
