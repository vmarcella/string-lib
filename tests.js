"use strict";

require("mocha");
const assert = require("assert");
require("./");

describe("Extending the String type functionality", () => {
  it("should captialize the first letter", () => {
    assert.equal("Abc", "abc".capitalize());
    assert.equal("Details", "details".capitalize());
    assert.equal(" ", " ".capitalize());
    assert.equal("HI", "hI".capitalize());
    assert.equal("YeSaNdNo", "yeSaNdNo".capitalize());
    assert.notEqual("aBC", "aBC".capitalize());
  });

  it("should make all characters caps", () => {
    assert.equal("ABC", "abc".allCaps());
    assert.equal("FOO FOO BAR", "foo foo bar".allCaps());
    assert.equal(
      "EXTREMELY LONG STRING THAT IS EXTREMELY LONG",
      "extremely long string that is extremely long".allCaps()
    );
    assert.notEqual("YES AnD NO", "yes and no".allCaps());
    assert.notEqual("TaLkInG", "talking".allCaps());
  });

  it("should make every word in a string capitalized", () => {
    assert.equal("This Is the Word", "this is the word".capitalizeWords());
    assert.equal("the in by at from", "the in by at from".capitalizeWords());
    assert.equal(
      "the Other Word in Sentence",
      "the other word in sentence".capitalizeWords()
    );

    assert.equal(
      "the Dog Jumped Over the Moon in the Backyard",
      "the dog jumped over the moon in the backyard".capitalizeWords()
    );
    assert.equal("Last but Not Butt", "last but not butt".capitalizeWords());
  });

  it("should capitalize every odd character", () => {
    assert.equal("aBc  D e F", "abc  d e f".oddCaps());
    assert.equal("aBcDeFgHjK", "abcdefghjk".oddCaps());
    assert.equal("aStRoWoRl      D", "astroworl      d".oddCaps());
    assert.equal("wOoOoOoSh", "woooooosh".oddCaps());
  });

  it("should capitalize every even character", () => {
    assert.equal("AbCdEfGh", "abcdefgh".evenCaps());
    assert.equal("A     bCdEfGh", "A     bCdEfGh".evenCaps());
    assert.equal(
      "H     e   L     l         O",
      "h     e   l     l         o".evenCaps()
    );
  });
});
