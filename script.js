//build board
function buildBoard(size) {
  columnRatio(size);
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
  let percentage =`repeat(${size}, ${100 / size}%)`;
  board.style.gridTemplateColumns = percentage;
  board.style.gridTemplateRows = percentage;
}
//Listen for mouse click on board
//When click held, add class to divs inside of "board" div
//Listen for button clicks to change options
