// 1. Write a for loop to print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Write a for loop that logs "Hello, World!" 5 times.

for (let i = 0; i < 5; i++) {
  console.log("Hello, World!");
}

// 3. Write a for loop that logs numbers from 10 to 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 4/ Write a while loop to print numbers from 1 to 10.

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 5. Write a for loop to print even numbers between 1 and 20.

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 6. Write a for loop to calculate the sum of numbers from 1 to 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

// 7. Write a for loop to print the multiplication table of 5.

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

// 8. Write a for loop to reverse a string.

let string = "hello";
let reversed = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversed += string[i];
}

// 9. Write a for loop to count the number of vowels in a string.

let vowels = "aeiou";
let count = 0;
let sentence = "hello world";
for (let char of sentence) {
  if (vowels.includes(char.toLowerCase())) {
    count++;
  }
}

// 10. Write a for loop to find the largest number in an array.

let numbers = [3, 5, 1, 8, 10];
let largest = numbers[0];
for (let number of numbers) {
  if (number > largest) {
    largest = number;
  }
}

// 11. Write a for loop to remove all duplicates from an array.

let duplicates = [1, 2, 2, 3, 4, 4, 5];
let unique = [];
for (let number of duplicates) {
  if (!unique.includes(number)) {
    unique.push(number);
  }
}
