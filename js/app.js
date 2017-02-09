console.log("Game 2048 JavaScript file is linked!");

function Game(name) {
  this.score = 0;
  this.hasWon = false;
  this.hasLost = false;
  this.board = [
    [ null, null, null, null ],
    [ null, null, null, null ],
    [ null, null, null, null ],
    [ null, null, null, null ]
  ];
  this._generateTile();
  this._getAvailablePosition();
  this.moveLeft();
  console.log(this.board);
  // this._generateTile();

}

Game.prototype._generateTile = function() {
  var tileValue;
  // this.x = Math.floor(Math.random() * 4);
  // this.y = Math.floor(Math.random() * 4);
  if (Math.random() < 0.8) {
    tileValue = 2;
  } else {
    tileValue = 4;
  }
  // this.value = 4 / (Math.floor(Math.random() * 2) + 1);

  var emptyTile = this._getAvailablePosition();
  if (emptyTile !== null) {
    var row = emptyTile.x;
    var col = emptyTile.y;
    this.board[row][col] = tileValue;
  }
};

Game.prototype._getAvailablePosition = function() {
  var emptyTiles = [];
  this.board.forEach(function(row, rowIndex) {
    row.forEach(function(cell, columnIndex) {
      if (cell === null) {
        emptyTiles.push({x: rowIndex, y: columnIndex});

      }
    });
  });
  if (emptyTiles.length === 0) {
    return null;
  }
  var randomIndex = Math.floor(Math.random() * emptyTiles.length);
  return emptyTiles[randomIndex];

};

Game.prototype._renderBoard = function() {
  this.board.forEach(function(row) {
    console.log(row);
  });
};
Game.prototype.moveLeft = function() {
  var updatedBoard = [];

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
    
    updatedBoard.push(moved);
  });
  this.board = updatedBoard;
};
Game.prototype.showTiles = function() {
  console.log(this.board);
};

var newGame = new Game("SPR");
// var newGame = new Game("SPR");
$(".startGame").click(function() {
  newGame._generateTile();
});
$(".showTiles").click(function() {
  newGame.moveLeft();
});
// newGame._generateTile();
