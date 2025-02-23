// // 1. Create a promise that resolves after 2 seconds.

// const promise = new Promise((resolve) => {
//   return setTimeout(() => {
//     resolve("resolved after two seconds");
//   }, 2000);
// });

// promise.then((res) => console.log(res));

// // 2. Create a promise that rejects after 2 seconds.

// const rejected = new Promise((reject) => {
//   return setTimeout(() => {
//     reject("Rejected after two seconds");
//   }, 2000);
// });
// rejected.then((res) => console.log(res));

// // 3. Chain promises using .then.

// const chanined = Promise.resolve(1);

// chanined.then((res) => res + 1).then((res) => console.log(res));

// // 4. Handle errors in a promise chain using .catch.

// const error = Promise.reject("Error");
// error.then((res) => console.log(res)).catch((err) => console.log(err));

// // 5. Use Promise.all to wait for multiple promises.

// const all = Promise.all([
//   //if one of the promises is rejected, everything is rejected, if not [1,2,3] is returned
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(3),
// ]);
// all.then((res) => console.log(res)).catch((err) => console.log(err));

// // 6. Use Promise.race to get the result of the first resolved promise.

// const race = Promise.race([
//   Promise.resolve(1),
//   Promise.resolve(2),
//   Promise.resolve(
//     setTimeout(() => 3),
//     200
//   ),
// ]);
// race.then((res) => console.log(res));

// // 7. Convert a callback-based function to a promise-based function.

// const callbackBased = (cb) => {
//   cb(3);
// };
// callbackBased((data) => console.log(data));

// const promiseBased = () => {
//   return new Promise((resolve) => resolve(3));
// };
// promiseBased().then((res) => console.log(res));

// 8. Use async/await with a promise.

const asyncPromise = await new Promise((resolve) => resolve("data"));
console.log(asyncPromise);

const async2 = await Promise.resolve("data");
console.log(async2);

// 9. Handle errors with async/await.

const handleErr = await new Promise((reject) => reject("error"));
try {
  console.log(handleErr);
} catch (err) {
  console.log(err);
}

// 10. Use Promise.finally to run code after a promise settles.

const finallyP = Promise.resolve("resolved");

finallyP.then((res) => console.log(res)).finally(console.log("done"));
