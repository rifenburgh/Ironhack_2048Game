Game.prototype.moveDown = function () {
  this._transposeMatrix();
  var boardChanged = this.moveRight();
  this._transposeMatrix();
  return boardChanged;
};
