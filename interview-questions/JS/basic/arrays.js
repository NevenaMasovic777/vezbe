// 1. Create an array of numbers and print each element using a for loop.

let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
//OR
numbers.forEach((number) => console.log(number));

// 2. Write a function to find the sum of all elements in an array.

function sumArray(array) {
  return array.reduce((sum, number) => sum + number, 0);
}

// 3. Write a function to find the average of all elements in an array.

function averageArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

// 4. Write a function to reverse an array.

function reverseArray(array) {
  return array.reverse();
}

// 5. Write a function to check if an array contains a specific element.

function containsElement(array, element) {
  return array.includes(element);
}

// 6. Write a function to merge two arrays.

function mergeArrays(array1, array2) {
  return array1.concat(array2);
}
// OR
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}

// 7. Write a function to remove an element from an array at a specific index.

function removeElement(array, index) {
  array.splice(index, 1);
  return array;
}

// 8. Write a function to remove all occurrences of a specific element from an array.

function removeAllOccurrences(array, element) {
  return array.filter((item) => item !== element);
}

// 9. Write a function to remove duplicates from an array.

function removeDuplicates(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}
//OR
function removeDuplicates(array) {
  return [...new Set(array)];
}

// 10. Write a function to flatten a nested array.

function flattenArray(array) {
  return array.flat();
}
//OR
function flattenArray(array) {
  return array.reduce((acc, val) => acc.concat(val), []);
}

// 11. Write a function to sort an array in ascending order.

function sortArray(array) {
  return array.sort((a, b) => a - b);
}

// 12. Write a function to sort an array in descending order.

function sortArrayDescending(array) {
  return array.sort((a, b) => b - a);
}

// 13. Write a function to filter out even numbers from an array.

function filterEvenNumbers(array) {
  return array.filter((number) => number % 2 === 0);
}
