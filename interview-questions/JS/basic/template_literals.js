// 1. Use template literals to create a sentence with variables.

let name = "John";
let age = 30;
let job = "Web Developer";
let city = "Miami";

console.log(
  `Hello, my name is ${name}, I am ${age} years old, I work as a ${job} in ${city}.`
);

// 2. Use template literals to create a multi-line string.

let multiLine = `
  This is line 1.
  This is line 2.
`;

// 3. Use template literals to embed an expression.

let a = 10;
let b = 20;

console.log(`The sum of a and b is ${a + b}.`);

// 4. Use template literals to create an HTML template.

let title = "JavaScript Basics";
let content = "This is a simple template in JavaScript.";
let author = "John Doe";
let html = `
  <article>
    <h1>${title}</h1>
    <p>${content}</p>
    <span>Author: ${author}</span>
  </article>
`;

// 5. Use template literals to format a date.

let date = new Date();
let formattedDate = `
  Today is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}
`;
