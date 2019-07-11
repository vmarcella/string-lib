/**
 * Capitalize the first letter of the current string.
 * @function
 * @returns {String} The capitalized version of the current string.
 * @example
 *  "this".capitalize() -> "This"
 */
String.prototype.capitalize = function() {
  const firstChar = this[0].toUpperCase();
  return firstChar + this.slice(1, this.length);
};

/**
 * Uppercase every character within the string.
 * @function
 * @returns {String} The entire string all capitalized of the current string.
 * @example
 *  "this".allCaps() -> "THIS"
 */
String.prototype.allCaps = function() {
  return this.toUpperCase();
};

/**
 * Uppercase every word within the string
 * (Not including: the, in, a, an, and, but, for, at, by, from)
 * @returns {String} with every first character in every word capitalized of the current string.
 * @example
 *  "this word".capitalizeWords() -> "This Word"
 */
String.prototype.capitalizeWords = function() {
  const exclusionWords = [
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

  const capitalizedWords = [];

  // Iterate through our words, check if they're an exclusion word,
  // and then capitalzie them if they're not.
  for (word of this.split(" ")) {
    console.log(word);
    if (!exclusionWords.includes(word)) {
      word = word.capitalize();
    }
    capitalizedWords.push(word);
  }

  return capitalizedWords.join(" ");
};

/**
 * Uppercase every other odd character not including white space.
 * @function
 * @returns {String} of every odd character capitalized of the current string.
 * @example
 *  "this".oddCaps() -> "tHiS"
 */
String.prototype.oddCaps = function() {
  let counter = 0;
  outputWord = [];

  // Iterate through every character capitalize every odd one.
  for (char of this.split("")) {
    if (char !== " ") {
      char = counter % 2 === 0 ? char : char.toUpperCase();
      counter += 1;
    }
    outputWord.push(char);
  }

  return outputWord.join("");
};

/**
 * Uppercase every even character not including white space.
 * @function
 * @returns {String} of every even character capitalized of the current string.
 * @example
 *  "this".evenCaps() -> "ThIs"
 */
String.prototype.evenCaps = function() {
  let counter = 0;
  outputWord = [];

  for (char of this.split("")) {
    if (char !== " ") {
      char = counter % 2 == 0 ? char.toUpperCase() : char;
      counter += 1;
    }

    outputWord.push(char);
  }

  return outputWord.join("");
};

/**
 * Remove any extra whitespace throughout the string.
 * @function
 * @returns {String} with all the extra white space removed.
 * @example
 *  "   this  word    ".removeExtraWhiteSpace() -> "this word"
 */
String.prototype.removeExtraWhiteSpace = function() {
  // Regex pattern that searches for any global occurence of
  // continuations of two or more spaces.
  const pattern = /[ ]{2,}/g;
  let newStr = this.replace(pattern, " ");
  return newStr.trim();
};

/**
 * Kabob case the current string if it has spaces.
 * @function
 * @returns {String} that is a kabob cased version of the current string
 * @example
 *  "kabob this!".kabobCase() -> "kabob-this!"
 */
String.prototype.kabobCase = function() {
  const trimmedStr = this.removeExtraWhiteSpace();
  const pattern = /\s/g;
  const newStr = trimmedStr.replace(pattern, "-");
  return newStr;
};

/**
 *
 * Snake case the current string if it has spaces.
 * @function
 * @returns {String} that is a snake cased version of the current string
 * @example
 *  "snake case this!".snakeCase() -> "snake_case_this!"
 */
String.prototype.snakeCase = function() {
  const trimmedStr = this.removeExtraWhiteSpace();
  const pattern = /\s/g;
  const newStr = trimmedStr.replace(pattern, "_");
  return newStr;
};

/**
 * Convert the current string to camel case if it has spaces.
 * @function
 * @returns {String} that is a camel cased version of the current string
 * @example
 *  "camel case these words!".camelCase() -> "camelCaseTheseWords"
 */
String.prototype.camelCase = function() {
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
  return outputWord.join("");
};
