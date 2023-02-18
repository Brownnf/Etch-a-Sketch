//build board
let bsize = 0;
function buildBoard(size) {
  bsize = size;
  columnRatio(size);
  //Clear out any previous divs
  let elements = document.getElementsByClassName("tile");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  size = size * size;
  for (i = 0; i < size; i++) {
    let tile = document.createElement("div");
    tile.className = "tile grid";
    //Append divs to "board" div
    document.getElementById("board").appendChild(tile);
  }
}

//Function to change the ratio for the grid template
function columnRatio(size) {
  let board = document.getElementById("board");
  let percentage = `repeat(${size}, ${100 / size}%)`;
  board.style.gridTemplateColumns = percentage;
  board.style.gridTemplateRows = percentage;
}

let color = "black";
let standard = true;
let option = "";

//function to get user color
function colorChoice(choice) {
  console.log(choice);
  if (choice == "rainbow") {
    color = ["#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
    option = "rainbow";
    buildBoard(bsize);
  }
  //Get user choice
  else if (choice == "black") {
    color = "black";
    option = "black";
    buildBoard(bsize);
  } else {
    color = choice;
    option = "person";
    buildBoard(bsize);
  }
}

//Get sketch board
let divArray = document.getElementById("board");

//Observe the board, and add the event listeners once the divs have been populated
let observer = new MutationObserver(function () {
  let tiles = document.getElementsByClassName("tile");
  let tileArray = Array.from(tiles);
  tileArray.forEach((tileArray) => {
    if (option == "rainbow") {
      tileArray.addEventListener("mouseover", () => {
        tileArray.style.background = color[Math.floor(Math.random() * color.length)];
        tileArray.style.background = color;
      });
    } else {
      tileArray.addEventListener("mouseover", () => {
        tileArray.style.background = color;
      });
    }
  });
});
observer.observe(divArray, { attributes: false, childList: true, subtree: true });

//Clear board function
function clearBoard() {
  buildBoard(bsize);
}

//Toggle gridlines function
function gridToggle() {
  //Get board
  let board = document.getElementById("board").querySelectorAll(".tile");
  //Build array
  let boardArray = Array.from(board);
  //Toggle grid class on all the divs
  boardArray.forEach((element) => {
    element.classList.toggle("grid");
  });
}

//Listen for button clicks to change options

let rangeInput = document.getElementById("myRange");
let boardSize = document.getElementById("boardSize");

rangeInput.addEventListener("input", function () {
  boardSize.textContent = `${this.value}x${this.value}`;
});

rangeInput.addEventListener("mouseup", function () {
  if (this.value > 0 && this.value < 0) {
    alert("First");
  } else {
    buildBoard(this.value);
  }
});
