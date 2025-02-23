// 1. Use map to double each number in an array.

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// 2. Use filter to get even numbers from an array.

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

// 3. Use reduce to sum all numbers in an array.

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 4. Use forEach to log each element of an array.

numbers.forEach((number) => console.log(number));

// 5. Use some to check if an array contains a specific element.

const hasEven = numbers.some((number) => number % 2 === 0);
console.log(hasEven);

// 6. Use every to check if all elements in an array are positive.

const allPositive = numbers.every((number) => number > 0);
console.log(allPositive);

// 7. Use find to get the first even number in an array.

const firstEven = numbers.find((number) => number % 2 === 0);
console.log(firstEven);

// 8. Use findIndex to get the index of the first even number in an array.

const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
console.log(firstEvenIndex);

// 9. Use includes to check if an array contains a specific element.

const hasThree = numbers.includes(3);
console.log(hasThree);

// 10. Use indexOf to get the index of a specific element in an array.

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

// 11. Use lastIndexOf to get the last index of a specific element in an array.

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);

// 12. Use slice to get a subarray from an array.

const subArray = numbers.slice(1, 4);
console.log(subArray);

// 13. Use splice to remove elements from an array.

const removedElements = numbers.splice(1, 2);
console.log(removedElements);

// 14. Use concat to merge two arrays.

const moreNumbers = [6, 7, 8, 9, 10];
const mergedArray = numbers.concat(moreNumbers);
console.log(mergedArray);

// 15. Use reverse to reverse the elements of an array.

const reversedArray = numbers.reverse();
console.log(reversedArray);

// 16. Use sort to sort the elements of an array.

const sortedArray = numbers.sort();
console.log(sortedArray);

// 17. Use fill to fill an array with a specific value.

const filledArray = numbers.fill(0);
console.log(filledArray);

// 18. Use copyWithin to copy elements within an array.

const copiedArray = numbers.copyWithin(0, 1, 3);
console.log(copiedArray);

// 19. Use flat to flatten a nested array.

const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

// 20. Use flatMap to map and flatten an array.

const flatMappedArray = numbers.flatMap((number) => [number, number * 2]);
console.log(flatMappedArray);

// 21. Use from to create an array from an iterable object.

const arrayFrom = Array.from("hello");
console.log(arrayFrom);

// 22. Use of to create an array from arguments.

const arrayOf = Array.of(1, 2, 3, 4, 5);
console.log(arrayOf);

// 23. Use isArray to check if a value is an array.

const isArray = Array.isArray(numbers);
console.log(isArray);

// 24. Use join to join the elements of an array into a string.

const joinedArray = numbers.join(", ");
console.log(joinedArray);

// 25. Use toString to convert an array to a string.

const stringArray = numbers.toString();
console.log(stringArray);

// 26. Use keys to get the keys of an array.

const keys = numbers.keys();
for (const key of keys) {
  console.log(key);
}

// 27. Use values to get the values of an array.

const values = numbers.values();
for (const value of values) {
  console.log(value);
}

// 28. Use entries to get the key-value pairs of an array.

const entries = numbers.entries();
for (const entry of entries) {
  console.log(entry);
}
