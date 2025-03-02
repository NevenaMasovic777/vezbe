// 1. Write a function to convert a string to uppercase.

function toUpperCase(string) {
  return string.toUpperCase();
}

// 2. Write a function to convert a string to lowercase.

function toLowerCase(string) {
  return string.toLowerCase();
}

// 3. Write a function to capitalize the first letter of a string.

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 4. Write a function to reverse a string.

function reverseString(string) {
  return string.split("").reverse().join("");
}

// 5. Write a function to count the number of words in a string.

function countWords(string) {
  return string.split(" ").length;
}

// 6. Write a function to remove all spaces from a string.

function removeSpaces(string) {
  return string.replace(/\s/g, "");
}

// 7. Write a function to replace all occurrences of a word in a string.

function replaceWord(string, word, replacement) {
  return string.replace(new RegExp(word, "g"), replacement);
}

// 8. Write a function to check if a string contains a specific word.

function containsWord(string, word) {
  return string.includes(word);
}

// 9. Write a function to count the number of vowels in a string.

function countVowels(string) {
  return string.match(/[aeiou]/gi).length;
}

// 10. Write a function to replace all occurrences of a substring in a string.

function replaceSubstring(string, substring, replacement) {
  return string.replace(new RegExp(substring, "g"), replacement);
}

// 11.How to find the longest substring that doesnt repeat in a string?

function longestUniqueSubstring(s) {
  let charSet = new Set();
  let left = 0,
    maxLength = 0;
  let startIndex = 0; // Track the starting index of the longest substring

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]); // Remove leftmost character
      left++; // Shrink window
    }

    charSet.add(s[right]); // Add new character
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      startIndex = left; // Update starting index
    }
  }

  return s.substring(startIndex, startIndex + maxLength); // Extract substring
}

console.log(longestUniqueSubstring("abcabcbb")); // Output: 3 ("abc")
