// 1. Write a debounce function for a search input.

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

const search = debounce((sum) => console.log("searching", sum), 1000);
search(2);
