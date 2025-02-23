// 1. Explain the output of the following code:

console.log("Start");
setTimeout(() => console.log("Timeout"), 0); //macrotask
Promise.resolve().then(() => console.log("Promise")); //microtask
console.log("End");

/*
Explanation:

Synchronous code (console.log("Start") and console.log("End")) runs first.

Microtasks (like Promises) run before macrotasks (like setTimeout).

 */

// 2. Write code to demonstrate the difference between microtasks and macrotasks.

setTimeout(() => console.log("Runs after microtask"), 0);
console.log(Promise.resolve("Runs before macrotask"));

// 3. Use setTimeout to defer a function call.

setTimeout(() => console.log("Deferred"), 1000);

// 4. Use setImmediate (Node.js) to schedule a function call.

setImmediate(() => console.log("Immediate"));

// 7. Use process.nextTick (Node.js) to schedule a microtask.

process.nextTick(() => console.log("Next Tick"));

// 8. Explain the output of the following code:

setTimeout(() => console.log("Timeout 1"), 0);
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
Promise.resolve().then(() => console.log("Promise 2"));

// 9. Write code to demonstrate the event loop phases in Node.js.

setTimeout(() => console.log("Timeout"), 0);
setImmediate(() => console.log("Immediate"));

/*
Explanation:
Promise.resolve().then(() => console.log("Promise")):

This schedules a microtask in the Promise microtask queue.

process.nextTick(() => console.log("Next Tick")):

This schedules a microtask in the nextTick queue.

Execution Order:
Synchronous Code:

There is no synchronous code here, so the event loop starts processing tasks.

nextTick Queue:

The process.nextTick callback ("Next Tick") is executed first because it has higher priority than the Promise microtask queue.

Promise Microtask Queue:

The Promise.resolve().then callback ("Promise") is executed next.
 */

// 10.

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("Next Tick"));

/*
Explanation:
setTimeout(() => console.log("Timeout"), 0):

This schedules a macrotask (a task in the Timer Phase of the event loop).

It will be executed after all synchronous code and microtasks are completed.

Promise.resolve().then(() => console.log("Promise")):

This schedules a microtask (a task in the Microtask Queue).

Microtasks are executed immediately after the current synchronous code and before any macrotasks.

process.nextTick(() => console.log("Next Tick")):

This schedules a microtask in the nextTick queue (specific to Node.js).

The nextTick queue has higher priority than the Promise microtask queue.
 */

/*
Key Takeaways
process.nextTick:

Has the highest priority among microtasks.

Executes immediately after the current operation and before any other microtasks or macrotasks.

Promise Microtasks:

Executed after process.nextTick callbacks but before macrotasks (like setTimeout).

Macrotasks:

Executed after all microtasks are completed.

Examples: setTimeout, setInterval, setImmediate.

Visualization of the Event Loop
Here’s how the event loop processes tasks in this example:

Synchronous Code:

None in this case.

Microtasks:

process.nextTick queue: "Next Tick" (highest priority).

Promise microtask queue: "Promise".

Macrotasks:

Timer phase: "Timeout".
 */
