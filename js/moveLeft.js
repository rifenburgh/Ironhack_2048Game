Game.prototype.moveLeft = function() {
  var updatedBoard = [];
  var theGame = this;

  //1. if NOT Null push values to the newRow array
  this.board.forEach(function(row) {
    var newRow = [];
    row.forEach(function(cell) {
      //remove the empty items from the row
      if (cell !== null) {
        newRow.push(cell);
      }
    });
    //2. Merge Cells
    for (var i = 0; i < newRow.length; i++) {
      //Determine if move left needs to merge
      if (newRow[i] === newRow[i + 1]) {
        newRow[i] *= 2;
        newRow[i + 1] = null;
        theGame._updateScore(newRow[i]);
      }
    }
    //3. remove new emptys
    var moved = [];
    newRow.forEach(function(cell) {
      if (cell !== null) {
        moved.push(cell);
      }
    });
    //4. push() pulls until row has length of 4 again
    while (moved.length < 4) {
      moved.push(null);
    }
    if (newRow.length !== row.length) {
      theGame.boardHasChanged = true;
    }
    updatedBoard.push(moved);
  });
  this.board = updatedBoard;
};
