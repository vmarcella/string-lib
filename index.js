String.prototype.capitalize = function() {
  /*
   * Capitalize the first letter of the current string.
   */
  const firstChar = this[0].toUpperCase();
  return firstChar + this.slice(1, this.length);
};

String.prototype.allCaps = function() {
  /*
   * Uppercase every character within the string.
   */
  return this.toUpperCase();
};

String.prototype.captializeWords = function() {
  /*
   * Uppercase every word within the string
   * (Not including: the, in, a, an, and, but, for, at, by, from)
   */
  exclusion_words = [
    "the",
    "in",
    "a",
    "an",
    "and",
    "but",
    "for",
    "at",
    "by",
    "from"
  ];

  capitalized_word = [];

  // Iterate through our words, check if they're an exclusion word,
  // and then capitalzie them if they're not.
  for (word of this.split(" ")) {
    if (!exclusion_words.includes(word)) {
      word = word.capitalize();
    }
    captializeWords.push(word.toUpperCase());
  }

  return captializedWords.join("");
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
