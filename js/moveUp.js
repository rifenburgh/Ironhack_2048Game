Game.prototype.moveUp = function() {
  this._transposeMatrix();
  var boardChanged = this.moveLeft();
  this._transposeMatrix();
  return boardChanged;
};
