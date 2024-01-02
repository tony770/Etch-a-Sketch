function createGrid(size){
  
  size = size || 16;

  let cellWidth = 40/size + "rem";
  let cellHeight = 40/size + "rem";

  const gridContainer = document.getElementById('gridContainer');
  for(let i = 0; i < size * size; i++)
  {
    const grid = document.createElement('div');
    grid.classList.add('gridItem');
    grid.style.width = cellWidth;
    grid.style.height = cellHeight;
    gridContainer.appendChild(grid);
  }

  onLoad();
}

window.addEventListener('DOMContentLoaded', (event) => {
  createGrid();
});

function reset() {
  let grid = document.querySelectorAll(".gridItem").forEach(item => {
    item.style.backgroundColor = "white";
  })
  
  //need fixing
  let promptSize = prompt("Gridsize");
  let gridSize = parseInt(promptSize, 10);

  const gridContainer = document.getElementById('girdContainer');
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(gridSize);
}




function changeColor() {
  this.style.backgroundColor = '#000000'
}

function onLoad() {
  let pixels = document.querySelectorAll(".gridItem");
  pixels.forEach(pixel => pixel.addEventListener("mouseover", changeColor));
}
