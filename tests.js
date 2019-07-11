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
});
