var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + "is not truthy");
    } else {
      console.log("v")
    }
  }
};

(function(){
  // console.log(exports);
  var testText = "some Text";
  var note = new Note(testText);

  function testNoteInstantiation() {
    assert.isTrue(note instanceof Note);
  };
  function testContainsText() {
    assert.isTrue(note.displayText() === testText);
  };
  testNoteInstantiation();
  testContainsText();
})();
