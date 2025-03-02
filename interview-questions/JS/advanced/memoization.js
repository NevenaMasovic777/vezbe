// 1. Write a memoized function to calculate the factorial of a number.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function memoize(func) {
  const cache = {};
  return function (n) {
    //n je argument koji se prosledjuje tipa memoizedSum funkciji
    if (cache[n]) return cache[n];
    cache[n] = func(n); // smestamo rezultat u objekat {5: 120} -> memoizedFactorial {'1,2,3': 6} -> memoized sum
    console.log(cache);
    return cache[n];
  };
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // 120

// 2. Write a memoized function to calculate the sum of an array of numbers.

function calculateSum(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

const memoizedSum = memoize(calculateSum); // ref na funkciju
console.log(memoizedSum([1, 2, 3])); //prosledjuju se ovde argumenti
