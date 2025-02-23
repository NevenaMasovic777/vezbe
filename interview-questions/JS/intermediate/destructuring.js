// 1. Destructure an array into variables.

const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 4 5

// 2. Destructure an object into variables.

const obj = { name: "John", age: 30, city: "New York" };
const { name, age, city } = obj;
console.log(name, age, city); // John 30 New York

// 3. Destructure an array into variables with default values.

const arr2 = [1, 2];
const [a2, b2, c2 = 3] = arr;
console.log(a2, b2, c2); // 1 2 3

// 4. Destructure nested objects.

const obj2 = {
  name: "John",
  age: 30,
  city: "New York",
  job: {
    title: "Software Engineer",
    experience: "5 years",
  },
};

const {
  name: name2,
  age: age2,
  city: city2,
  job: { title, experience },
} = obj2;

console.log(name2, age2, city2, title, experience); // John 30 New York Software Engineer 5 years

// 5. Destructure an array of objects.

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 },
];

const [{ name: name3, age: age3 }, { name: name4, age: age4 }] = users;
console.log(name3, age3, name4, age4); // John 30 Jane 25

// 6. Destructure an object with rest operator.

const obj3 = { a3: 1, b3: 2, c3: 3, d3: 4, e3: 5 };
const { a3, b3, ...rest } = obj3;
console.log(a3, b3, rest); // 1 2 { c3: 3, d3: 4, e3: 5 }

// 7. Destructure an array with rest operator.

const arr3 = [1, 2, 3, 4, 5];
const [a4, b4, ...rest2] = arr3;
console.log(a4, b4, rest2); // 1 2 [ 3, 4, 5 ]

// 8. Destructure an object with alias.

const obj4 = { name4: "John", age4: 30, city4: "New York" };
const { name4: userName, age4: userAge, city4: userCity } = obj4;
console.log(userName, userAge, userCity); // John 30 New York

// 9. Destructure an array and ignore some elements.

const arr4 = [1, 2, 3, 4, 5];
const [a5, , , d5] = arr4;
console.log(a5, d5); // 1 4

// 10. Destructure a function's return value.

function getValues() {
  return [1, 2, 3, 4, 5];
}

const [a6, b6, c6, d6, e6] = getValues();
console.log(a6, b6, c6, d6, e6); // 1 2 3 4 5
