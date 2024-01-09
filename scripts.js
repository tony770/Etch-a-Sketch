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
  
  let promptSize = prompt("Enter grid size(Maximum size of 100): ");
  let gridSize = parseInt(promptSize, 10);

  while(gridSize > 100 || gridSize <= 0)
  {
    newPrompt = prompt("Please enter valid size: ");
    gridSize = parseInt(newPrompt, 10);
  }

  const gridContainer = document.getElementById('gridContainer');
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(gridSize);
}




function paint() {
  this.style.backgroundColor = '#000000'
}

function onLoad() {
  let pixels = document.querySelectorAll(".gridItem");
  pixels.forEach(pixel => pixel.addEventListener("mouseover", paint));
}
