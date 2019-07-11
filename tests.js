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

  it("should remove all extra white spaces", () => {
    assert.equal(
      "h e l l o",
      "    h e     l    l    o".removeExtraWhiteSpace()
    );
    assert.equal(
      "e e",
      "    e                  e       ".removeExtraWhiteSpace()
    );
    assert.equal(
      "he ll no",
      "he          ll           no        ".removeExtraWhiteSpace()
    );
    assert.equal(
      "this is it",
      "   this   is    it       ".removeExtraWhiteSpace()
    );
  });

  it("should kabob case the characters", () => {
    assert.equal("yes-sir", "   yes sir    ".kabobCase());

    assert.equal(
      "another-test-for-this",
      "    another test    for this".kabobCase()
    );
    assert.equal(
      "isnt-this-the-same-thing?",
      " isnt    this    the    same    thing?".kabobCase()
    );
  });

  it("should snake case the characters", () => {
    assert.equal("yes_sir", "yes      sir       ".snakeCase());
    assert.equal(
      "thisshouldhaveone_here",
      "  thisshouldhaveone here".snakeCase()
    );
    assert.equal("what_is_up_tim?", "    what     is   up   tim?".snakeCase());
  });
});
