// 1. Write a function checkNumber that logs "Positive" if the number is greater than 0, "Negative" if less than 0, and "Zero" if 0.

function checkNumber(number) {
  if (number > 0) {
    console.log("Positive");
  } else if (number < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// 2. Write a function isLeapYear that checks if a year is a leap year.

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

// 3. Write a function gradeStudent that assigns grades based on a score (A, B, C, D, F).

function gradeStudent(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 4. Write a function compareNumbers that logs which of two numbers is larger.

function compareNumbers(a, b) {
  if (a > b) {
    console.log(a + " is larger");
  } else if (a < b) {
    console.log(b + " is larger");
  } else {
    console.log("Both numbers are equal");
  }
}

// 5. Write a function isVowel that checks if a character is a vowel.

function isVowel(character) {
  return "aeiou".includes(character.toLowerCase());
}

// 6. Write a function isConsonant that checks if a character is a consonant using the isVowel function.

function isConsonant(character) {
  return !isVowel(character);
}

//7. Write a function checkAge that logs "Adult" if age is 18 or older, otherwise "Minor".

function checkAge(age) {
  console.log(age >= 18 ? "Adult" : "Minor");
}
