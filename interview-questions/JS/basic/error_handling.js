// 1. Write a function that throws an error if the input is not a number.

function throwErrorIfNotNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Input is not a number");
  }
}

// 2. Write a function that catches an error and logs a custom message.

function safeDivide(a, b) {
  try {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// 3. Write a function that catches an error and rethrows it.

function rethrowError() {
  try {
    throw new Error("Original error");
  } catch (error) {
    console.log("Caught error:", error.message);
    throw error; //rethrow the error
  }
}

// 4. Write a function that uses finally to log a message after execution.

function example() {
  try {
    console.log("Try block");
  } catch (error) {
    console.log("Catch block");
  } finally {
    console.log("Finally block");
  }
}

// 5. Write a function that handles multiple error types.

function handleErrors() {
  try {
    throw new TypeError("Type error");
  } catch (error) {
    if (error instanceof TypeError) console.log("TypeError:", error.message);
    else console.log("Other error:", error.message);
  }
}

// 6. Write a function that uses Promise.catch to handle errors.

function asyncFunction() {
  Promise.reject("Error occurred").catch((error) =>
    console.log("Caught:", error)
  );
}

// 7. Write a function that uses async/await with error handling.

async function fetchData() {
  try {
    await Promise.reject("Error occurred");
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// 8. Write a function that validates user input and throws an error if invalid.

function validateInput(input) {
  if (!input) throw new Error("input required");
}

// 9/ Write a function that logs the stack trace of an error.

function logStackTrace() {
  try {
    throw new Error("Error occurred");
  } catch (error) {
    console.log(error.stack);
  }
}
