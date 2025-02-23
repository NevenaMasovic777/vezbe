// 1. Write a function greet that takes a name and returns "Hello, [name]!".

function greet(name) {
  return "Hello, " + name + "!";
}

// 2. Write a function isPositive that takes a number and returns true if the number is greater than 0.

function isPositive(number) {
  return number > 0;
}

// 3. Write a function isEven that checks if a number is even.

function isEven(number) {
  return number % 2 === 0;
}

// 4. Write a function max that returns the larger of two numbers.

function max(a, b) {
  return a > b ? a : b;
}

// 5. Write a function maxOfThree that returns the largest of three numbers using the max function.

function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

//6. Write a function reverseString that reverses a string.

function reverseString(string) {
  return string.split("").reverse().join("");
}

//7. Write a function isPalindrome that checks if a string is a palindrome using the reverseString function.

function isPalindrome(string) {
  return string === reverseString(string);
}

//8. Write a function average that calculates the average of two numbers.

function average(a, b) {
  return (a + b) / 2;
}

//9. Write a function removeDuplicates that removes duplicates from an array.

function removeDuplicates(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}

//10. Write a function factorial that calculates the factorial of a number.

function factorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}
