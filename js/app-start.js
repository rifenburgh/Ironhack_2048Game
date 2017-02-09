//console.log("app-start.js");
/*
1. Create Game Object

2. take the initial tiles and put them on the screen
3. handle keyboard events
4. move board in object based on keypresses (up, down, left, right)
5. updating the screen based on new changes
6. win or lose
*/

var myGlobalGame;

$("document").ready(function() {
  myGlobalGame = new Game();
  renderTiles();

  $(document).keydown(function(ev) {
    var acceptableKeys = [37, 38, 39, 40];
    if (!acceptableKeys.includes(ev.keyCode)) {
      return;
    }
    ev.preventDefault();
    switch(ev.keyCode) {
      case 37:
        myGlobalGame.move("left");
        console.log("Left");

        break;

      case 38:
        myGlobalGame.move("up");
        break;
      case 39:
        myGlobalGame.move("right");
        break;
      case 40:
        myGlobalGame.move("down");
        break;
      }
      $("#tiles").empty();
      renderTiles();
  });
});

function renderTiles() {
  //$("#tile-container").empty();
  myGlobalGame.board.forEach(function(row, rowIndex) {
    row.forEach(function(cell, colIndex) {
      if (cell === null) {
        cell = "";
      }
      // put cell on the screen
      console.log("Tile value: " + cell + " Row: " + rowIndex + " Column " + colIndex);
      var tileHtml = '<div class="cell tile tile-position-' + rowIndex + '-' + colIndex + ' val-' + cell + '">' +  cell + '</div>';
      console.log(tileHtml);
      $("#tiles").append(tileHtml);
    });
  });
}
