/*
What is a Higher-Order Function?
A higher-order function is a function that:

Takes one or more functions as arguments, or

Returns a function as its result.

Why Use Higher-Order Functions?
Abstraction: They allow you to write more generic and reusable code.

Functional Programming: They are a core concept in functional programming, enabling patterns like map, filter, and reduce.

Behavior Customization: You can pass behavior (functions) as arguments to customize how a function works.
*/

// 1. Write a function map that takes an array and a callback, and returns a new array with the callback applied to each element.

function map(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

console.log(map([1, 2, 3], (x) => x * 2)); // [ 2, 4, 6 ] //abstracts the process, znaci mogu da menjam funkciju koja se primenjuje na svaki element

// 2. Write a function filter that takes an array and a callback, and returns a new array with only the elements that pass the callback.

function filter(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filter([1, 2, 3], (x) => x > 1)); // [ 2, 3 ]

// 3. Write a function reduce that takes an array, a callback, and an initial value, and returns a single value.

function reduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let item of arr) {
    accumulator = callback(accumulator, item);
  }
  return accumulator;
}

console.log(reduce([1, 2, 3], (acc, x) => acc + x, 0)); // 6

// 4. Write a function forEach that takes an array and a callback, and applies the callback to each element.

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}

forEach([1, 2, 3], (x) => console.log(x * 2)); // 2 4 6

Array.prototype.map = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
}[(1, 2, 3)].map((x) => x * 2); // [ 2, 4, 6 ]

// 5. Write a function compose that takes multiple functions and returns a composed function.

function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

const add1 = (x) => x + 1;
const double = (x) => x * 2;
const triple = (x) => x * 3;
const add6 = compose(add1, double, triple);
console.log(add6(0)); // 6

// 6. Write a function pipe that takes multiple functions and returns a piped function.

function pipe(...fns) {
  return function (x) {
    return fns.reduce((acc, fn) => fn(acc), x);
  };
}

const add2 = (x) => x + 1;
const double2 = (x) => x * 2;
const triple2 = (x) => x * 3;
const add7 = pipe(add2, double2, triple2);
console.log(add7(0)); // 3

// 7. Write a function once that ensures a function is called only once.

function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}

const add8 = once((x, y) => x + y);
console.log(add8(1, 2)); // 3
console.log(add8(2, 3)); // undefined

// 8. Write a function curry that curries a function.

function curry(fn) {
  return function curried(...args) {
    if (args.length >= func.length) return func(...args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(1)(2, 3)); // 6

// 9. Write a function partial that partially applies a function.

function partial(fn, ...args) {
  return function (...moreArgs) {
    return fn(...args, ...moreArgs);
  };
}

const subtract = (a, b) => a - b;
const sub5 = partial(subtract, 5);
console.log(sub5(10)); // -5
