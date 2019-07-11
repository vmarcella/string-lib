"use strict";

require("mocha");
const assert = require("assert");
require("./");

describe("Extending the string functionality", () => {
  it("should captialize the first letter", () => {
    assert.equal("Abc", "abc".capitalize());
    assert.equal("Details", "details".capitalize());
    assert.equal(" ", " ".capitalize());
    assert.equal("HI", "hI".capitalize());
    assert.equal("YeSaNdNo", "yeSaNdNo".capitalize());
  });
});
