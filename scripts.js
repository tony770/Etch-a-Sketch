let color = "black";

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

const defaultbtn = document.getElementById("defaultbtn");
const rainbowbtn = document.getElementById("rainbowbtn");
const eraserbtn = document.getElementById("eraserbtn");

defaultbtn.addEventListener("click", function() {
  color = 'black';
});

rainbowbtn.addEventListener("click", function() {
  color = 'rainbow';
});

eraserbtn.addEventListener("click", function() {
  color = 'eraser';
});


function paint() {
  switch(color){
    case "rainbow":
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      break;
    case "black":
      this.style.backgroundColor = '#000000';
      break;
    case "eraser":
      this.style.backgroundColor = '#FFFFFF';
      break;
  }
}

function onLoad() {
  let pixels = document.querySelectorAll(".gridItem");
  pixels.forEach(pixel => pixel.addEventListener("mouseover", paint));
}
