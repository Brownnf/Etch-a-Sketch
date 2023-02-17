//build board
function buildBoard(size) {
  columnRatio(size);
  //Clear out any previous divs
  let elements = document.getElementsByClassName("tile");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  size = size * size;
  for (i = 0; i < size; i++) {
    let tile = document.createElement("div");
    tile.className = "tile";
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

//Get sketch board
let divArray = document.getElementById('board');

//Observe the board, and add the event listeners once the divs have been populated
let observer = new MutationObserver(function(){
   let tiles = document.getElementsByClassName('tile');
   let tileArray = Array.from(tiles);
   tileArray.forEach((tileArray) => {
    tileArray.addEventListener('mouseover', () => {tileArray.classList.add("black");
    });
  });
});
observer.observe(divArray, { attributes: false, childList: true, subtree: true });



//Listen for button clicks to change options

var rangeInput = document.getElementById("myRange");

rangeInput.addEventListener("mouseup", function () {
  if (this.value > 0 && this.value < 0) {
    alert("First");
  } else {
    buildBoard(this.value);
  }
});
