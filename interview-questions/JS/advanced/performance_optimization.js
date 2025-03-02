// 1. Use console.time and console.timeEnd to measure execution time.

console.time("loop");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop"); // "loop: Xms"

// 2. Use requestAnimationFrame for smooth animations.

function animate() {
  console.log("Animating...");
  requestAnimationFrame(animate);
}
animate();

// 3. Use debounce to optimize event handlers.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}
const handleResize = debounce(() => console.log("Resized!"), 1000);
window.addEventListener("resize", handleResize);

// 4. Use throttle to optimize event handlers.

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

const handleScroll = throttle(() => console.log("Scrolled!"), 1000);
window.addEventListener("scroll", handleScroll);

// 5. Use memoization to optimize function calls.

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    cache[key] = func(...args);
    return cache[key];
  };
}
const memoizedAdd = memoize((a, b) => a + b);
console.log(memoizedAdd(2, 3)); // 5 (calculated)
console.log(memoizedAdd(2, 3)); // 5 (cached)

// 6. Use Web Workers to offload heavy computations

const worker = new Worker("worker.js");
worker.postMessage("Start");
worker.onmessage = (event) => console.log(event.data);

// 7. Use lazy loading to optimize resource loading.

const image = document.createElement("img");
image.src = "placeholder.jpg";
image.dataset.src = "image.jpg";
image.onload = () => (image.src = image.dataset.src);
document.body.appendChild(image);

// 8. Use code splitting to optimize bundle size.

import("./module.js").then((module) => {
  module.default();
});

// 9. Use tree shaking to remove unused code.

import { add } from "./math.js";
console.log(add(2, 3)); // Only `add` is included in the bundle

// 10. Use performance profiling to identify bottlenecks.

console.profile("profile");
for (let i = 0; i < 1000000; i++) {}
console.profileEnd("profile");
