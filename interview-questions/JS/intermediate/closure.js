/*
What is a Closure?
A closure is a function that "remembers" the environment in which it was created. This means it has access to variables from its outer (enclosing) function, even after the outer function has finished executing.

Why Use Closures?
Data Encapsulation: Closures allow you to create private variables that cannot be accessed directly from outside the function.

Function Factories: You can create functions dynamically based on input parameters.

Callbacks and Event Handlers: Closures are often used in asynchronous programming to maintain state.
*/

// 1. Write a function createCounter that returns a function which increments and returns a counter.

function createCounter() {
  let count = 0; // private to the closure
  return function () {
    // inner function remembers the lexical environment -> count
    return ++count;
  };
  //The inner function "closes over" the count variable, so it persists between calls.
}

// This creates a counter that maintains its state between function calls.

// 2. Write a function createMultiplier that takes a number and returns a function to multiply another number by it.

function createMultiplier(num) {
  //function factory
  return function (multiplier) {
    //The inner function "closes over" the multiplier variable.
    return num * multiplier; //num->2, multiplier->5
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10 //forms closure -> lexical env is 5

// 3. Write a function createAdder that takes a number and returns a function to add that number to another number.

function createAdder(num) {
  return function (adder) {
    return num + adder;
  };
}

const addTen = createAdder(10);
console.log(addTen(5)); // 15 //forms closure -> lexical env is 10

// 4. Write a function createGreeter that takes a name and returns a function to greet that name.

function createGreeter(name) {
  return function (greet) {
    return `${greet} ${name}`;
  };
}

const greet = createGreeter("John");
console.log(greet("Hello")); // Hello John //forms closure -> lexical env is John

// 5. Write a function createPower that takes an exponent and returns a function to raise a number to that exponent.

function createPower(exponent) {
  return function (num) {
    return Math.pow(num, exponent);
  };
}

const square = createPower(2);
console.log(square(5));

// 6. Write a function createLogger that logs a message with a prefix.

function createLogger(prefix) {
  return function (message) {
    console.log(`${prefix} ${message}`);
  };
}

const log = createLogger("Error:");
log("Not Found"); // Error: Not Found

// 7. Write a function createTodoList that keeps a list of todos.

function createTodoList() {
  const todos = [];
  return {
    add(todo) {
      todos.push(todo);
    },
    remove(index) {
      todos.splice(index, 1);
    },
    get() {
      return todos;
    },
  };
}

const todoList = createTodoList();
todoList.add("Clean room");
todoList.add("Buy groceries");
console.log(todoList.get()); // [ 'Clean room', 'Buy groceries' ]
todoList.remove(1);
console.log(todoList.get()); // [ 'Clean room' ]

// 8. Write a function createStack that creates a stack.

function createStack() {
  const stack = [];
  return {
    push(item) {
      stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get() {
      return stack;
    },
  };
}

const stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.get()); // [ 1, 2, 3 ]
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.get()); // [ 1, 2 ]

// 9. Write a function createQueue that creates a queue.

function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.push(item);
    },
    dequeue() {
      return queue.shift();
    },
    peek() {
      return queue[0];
    },
    get() {
      return queue;
    },
  };
}

const queue = createQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.get()); // [ 1, 2, 3 ]
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
console.log(queue.get()); // [ 2, 3 ]

// 10. Write a function createMemoizedFunction that memoizes the result of a function.

function createMemoizedFunction(func) {
  //pogledati
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

const memoizedAdd = createMemoizedFunction((a, b) => a + b);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 //from cache
console.log(memoizedAdd(2, 3)); // 5

// 11. Write a function createPrivateCounter that hides the counter variable.

function createPrivateCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
}

// 12. Write a function createDebouncedFunction that debounces a function call.

function createDebouncedFunction(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

function createPerson() {
  let age = 0;
  return {
    getAge() {
      return age;
    },
    setAge(newAge) {
      age = newAge;
    },
  };
}

const person = createPerson();
person.setAge(25);
console.log(person.getAge()); // 25

/*
Create a closure-based function createSequence that returns an object with two methods:
next() which returns the next number in the sequence and reset() which resets the sequence back to 0.
 */

function createSequence() {
  let sequence = 0;

  return {
    next() {
      return (sequence = sequence + 1);
    },
    reset() {
      return (sequence = 0);
    },
  };
}

const sequence = createSequence();
