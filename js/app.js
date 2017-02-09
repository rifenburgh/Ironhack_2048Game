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

Game.prototype._transposeMatrix = function () {
  for (var row = 0; row < this.board.length; row++) {
    for (var column = row+1; column < this.board.length; column++) {
      var temp = this.board[row][column];
      this.board[row][column] = this.board[column][row];
      this.board[column][row] = temp;
    }
  }
};

Game.prototype.move = function(direction) {
  if (this.hasWon || this.hasLost) {
    return;
  }
  switch (direction) {
    case 'up':
      this.moveUp();
      break;
    case 'down':
      this.moveDown();
      break;
    case 'left':
      this.moveLeft();
      break;
    case 'right':
      this.moveRight();
      break;
  }
  if (this.boardHasChanged) {
    this._generateTile();
    this._isGameLost();
    this.boardHasChanged = false;
  }
};


Game.prototype._renderBoard = function() {
  this.board.forEach(function(row) {
    console.log(row);
    return(row);
  });
};

Game.prototype._updateScore = function(points) {
  this.score += points;
  if (this.score === 2048) {
    this.hasWon = true;
  }
  $(".score").html("Score: " + this.score);
};

Game.prototype._isGameLost = function() {
  if (this._getAvailablePosition() !== null) {
    return;
  }
  var theGame = this;
  this.board.forEach(function(row, rowIndex) {
    row.forEach(function(cell, cellIndex) {

      var current = theGame.board[rowIndex][cellIndex];
            var top, bottom, left, right;

            if (theGame.board[rowIndex][cellIndex - 1]) {
              left  = theGame.board[rowIndex][cellIndex - 1];
            }
            if (theGame.board[rowIndex][cellIndex + 1]) {
              right = theGame.board[rowIndex][cellIndex + 1];
            }
            if (theGame.board[rowIndex - 1]) {
              top    = theGame.board[rowIndex - 1][cellIndex];
            }
            if (theGame.board[rowIndex + 1]) {
              bottom = theGame.board[rowIndex + 1][cellIndex];
            }
            if (current === top || current === bottom || current === left || current === right)
               theGame.hasLost = false;


    });
  });
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
  var yoyo = newGame._renderBoard();
  $(".renderBoard").html("Score: " + this.score);
});
// newGame._generateTile();
