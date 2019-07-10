String.prototype.uppercaseFirst = function() {
  return this[0].toUpperCase() + this.slice(1, this.length);
};

String.prototype.uppercaseAll = function() {
  outputList = [];
  for (str of this.split(" ")) {
    outputList.push(str.uppercaseFirst());
  }

  return outputList.join(" ");
};

String.prototype.uppercaseEveryOther = function() {
  outputList = [];
  for (let i = 0; i < this.length; i += 1) {
    outputList.push(i % 2 == 0 ? this[i].toUpperCase() : this[i]);
  }

  return outputList.join("");
};

String.prototype.removeWhiteSpace = function() {
  outputList = [];
  for (let i = 0; i < this.length; i += 1) {
    if (this[i] !== " ") {
      outputList.push(this[i]);
    }
  }

  return outputList.join("");
};

String.prototype.removeExtraWhiteSpace = function() {
  const pattern = /[ ]{2,}/g;
  newStr = this.replace(pattern, " ");
  return newStr.trim();
};

console.log("yeet".uppercaseFirst());
console.log("yeet yeet yeet".uppercaseAll());
console.log("yeetyeetyeet".uppercaseEveryOther());
console.log("yeet yeet yeet".removeWhiteSpace());
console.log("y   e   e   t".removeExtraWhiteSpace());
