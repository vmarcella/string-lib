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

String.prototype.oddCaps = function() {
  /*
   * Uppercase every other odd character not including white space.
   */
  let counter = 0;
  output_word = [];

  // Iterate through every character capitalize every odd one.
  for (char of this.split()) {
    if (char !== " ") {
      char = counter % 2 == 0 ? char : char.toUpperCase();
      counter += 1;
    }
    output_word.push(char);
  }

  return output_word.join("");
};

String.prototype.evenCaps = function() {
  /*
   * Uppercase every even character not including white space.
   */
  let counter = 0;
  output_word = [];

  for (char of this.split()) {
    if (char !== " ") {
      char = counter % 2 == 0 ? char.toUpperCase() : char;
      counter += 1;
    }

    output_word.push(char);
  }

  return output_word.join("");
};

String.prototype.removeExtraWhiteSpace = function() {
  /*
   * Remove any extra whitespace throughout the string.
   */

  // Regex pattern that searches for any global occurence of
  // continuations of two or more spaces.
  const pattern = /[ ]{2,}/g;
  let newStr = this.replace(pattern, " ");
  return newStr.trim();
};

String.prototype.kabobCase = function() {
  /*
   * Kabob case the current string if it has spaces.
   */
  const trimmedStr = this.removeExtraWhiteSpace();
  const pattern = /\s/g;
  const newStr = this.replace(trimmedStr, "-");
  return newStr;
};

String.prototype.snakeCase = function() {
  /*
   * Snake case the current string if it has spaces.
   */
  const trimmedStr = this.removeExtraWhiteSpace();
  const pattern = /\s/g;
  const newStr = this.replace(trimmedStr, "_");
  return newStr;
};

String.prototype.camelCase = function() {
  /*
   * Convert the current string to camel case if it has spaces.
   */
  const trimmedStr = this.removeExtraWhiteSpace();
  const outputWord = [];

  // Iterate through all of the characters of the trimmed
  // string.
  for (let i = 0; i < trimmedStr.length; i += 1) {
    let currChar = trimmedStr[i];

    // If we're not at the first index and the previous character
    // equals a space, uppercase the current character.
    if (i != 0 && trimmedStr[i - 1] === " ") {
      currChar = currChar.toUpperCase();
    }

    // If the character isn't a space, push it to the new word list
    if (currChar !== " ") {
      outputWord.push(currChar);
    }
  }
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

console.log("yeet".uppercaseFirst());
console.log("yeet yeet yeet".uppercaseAll());
console.log("yeetyeetyeet".uppercaseEveryOther());
console.log("yeet yeet yeet".removeWhiteSpace());
console.log("y   e   e   t".removeExtraWhiteSpace());
