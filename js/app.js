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
  this._generateTile();
  this._renderBoard();

}

Game.prototype.lookup = function() {
  console.log(this.board[2][2]);
};

Game.prototype._generateTile = function() {
  var tileValue;
  this.x = Math.floor(Math.random() * 4);
  this.y = Math.floor(Math.random() * 4);
  if (Math.random() < 0.8) {
    this.value = 2;
  } else {
    this.value = 4;
  }
  // this.value = 4 / (Math.floor(Math.random() * 2) + 1);

  var emptyTile = this._getAvailablePosition();
  if (emptyTile !== null) {
    var row = emptyTile.x;
    var col = emptyTile.y;
    this.board[row][col] = tileValue;
    console.log(row, col);
  }

  // console.log(this.x + ", " + this.y + ", " + this.value);
  // this._getAvailablePosition();
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
  console.log("random" + randomIndex);
  console.log("random x:" + emptyTiles[randomIndex].x + " random y:" + emptyTiles[randomIndex].y);
  return emptyTiles[randomIndex];

};

Game.prototype._renderBoard = function() {
  this.board.forEach(function(row) {
    console.log(row);
  });
};

var newGame = new Game("SPR");
// newGame._generateTile();
