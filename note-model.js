function Note(text) {
  this.text = text;
}

Note.prototype.displayText = function () {
  return this.text;
};
