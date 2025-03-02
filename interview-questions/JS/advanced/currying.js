//1. Write a curried function that adds three numbers.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3));

// 2. Write a curried function to multiply three numbers.

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(multiply(1)(2)(3));

// 3. Write a curried function to concatenate three strings.

function concatenate(string1) {
  return function (string2) {
    return function (string3) {
      return `${string1} ${string2} ${string3}`;
    };
  };
}

console.log(concatenate("Nevena")("je")("prelepa"));

// 4. Write a curried function to calculate the power of a number.

function toPowerOf(a) {
  return function (b) {
    return a ** b;
  };
}

console.log(toPowerOf(2)(3));

// 5. Write a curried function to calculate the area of a rectangle.

function calculateArea(width) {
  return function (length) {
    return width * length;
  };
}
console.log(calculateArea(3)(4));

// 6. Write a curried function to calculate the sum of an array of numbers.

function calculateSum(arr) {
  return function () {
    return arr.reduce((acc, value) => acc + value, 0);
  };
}

console.log(calculateSum([1, 2, 4])());

// 7. Write a curried function to calculate the average of an array of numbers.

function calculateAverage(array) {
  return function () {
    const result = array.reduce((acc, value) => acc + value, 0);
    return result / array.length;
  };
}

console.log(calculateAverage([1, 2, 3, 4])());
