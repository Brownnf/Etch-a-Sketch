//build board
function buildBoard(size) {
  size = size * size;
  for (i = 0; i < size; i++) {
    let tile = document.createElement("div");
    tile.className = "tile";
    //Append divs to "board" div
    document.getElementById("board").appendChild(tile);
  }
}
//Listen for mouse click on board
//When click held, add class to divs inside of "board" div
//Listen for button clicks to change options
