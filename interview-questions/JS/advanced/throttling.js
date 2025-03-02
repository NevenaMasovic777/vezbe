// 1. Write a throttle function for a scroll event.

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

// const handleClick = throttle(() => console.log("Clicked!"), 2000);
// window.addEventListener("click", handleClick);

function exercise(fn) {
  return function (...args) {
    fn(...args);
  };
}

const calculate = exercise((num1, num2) => console.log(num1 * num2));
calculate(2, 3);

function test(fn, ...args) {
  return fn(...args);
}

test((num) => {
  console.log(num);
}, 5);
