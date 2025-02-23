// 1. Write an async function that returns a value.

async function asyncFunc(params) {
  return params;
}

const result = await asyncFunc("test");
console.log(result);

// 2. Use await to wait for a promise to resolve.

async function example() {
  const result = await Promise.resolve("Resolved!");
  console.log(result); // "Resolved!"
}
example();

// 3. Handle errors in an async function.

async function handleErr() {
  try {
    const result = await Promise.reject("Rejected");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
handleErr();

// 4. Use await with Promise.all.

async function handleAll() {
  try {
    const result = await Promise.all([
      Promise.resolve(1),
      Promise.reject(2),
      Promise.resolve(3),
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
handleAll();

// 5. Write an async function to fetch data from an API.

async function fetchAll() {
  return (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
}
const response = await fetchAll();
console.log(response);

// 6. Use async/await with a loop.

async function loopFunc() {
  for (let i = 0; i <= 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(i);
  }
}

const res = await loopFunc();
console.log(res);

// 7. Use async/await with try/catch/finally.

async function test(num) {
  return await new Promise((resolve, reject) => {
    //returns a promise
    if (num < 5) {
      resolve("Resolved");
    }
    reject("Rejected");
  });
}

try {
  const result = await test(6);
  console.log(result);
} catch (err) {
  console.log(err);
} finally {
  console.log("Settled");
}

// 8. Write an async function that throws an error.

async function throwError() {
  throw new Error("Error thrown");
}

try {
  const err = await throwError();
} catch (err) {
  console.log(err);
}
// OR
// throwError().catch((err) => console.log(err));

// 9. Use async/await with a custom promise.

async function example2() {
  const result = await new Promise((resolve) =>
    setTimeout(() => resolve("Done!"), 1000)
  );
  console.log(result); // "Done!" after 1 second
}
example2();
