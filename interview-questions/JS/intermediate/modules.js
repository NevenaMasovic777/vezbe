// 1. Export a function from a module and import it in another file.

// main.js
import multiply from "./modules/math.js";
import { Operations } from "./modules/math.js";
import { add, reduce, example } from "./modules/math.js";

console.log(add(2, 3)); // 5

// 2. Export a default function from a module

console.log(multiply(2, 3));

// 3. Export multiple functions from a module.

console.log(reduce(5, 3));

// 4. Import all exports from a module as an object.

import * as test from "./modules/test.js";
console.log(test.greet("Nevena")); // 5

// 5. Re-export a function from another module.

// // math.js
// export function add(a, b) {
//   return a + b;
// }

// // index.js
// export { add } from "./math.js";

// // main.js
// import { add } from "./index.js";
// console.log(add(2, 3)); // 5

// 6. Use dynamic imports to load a module conditionally.

if (true) {
  import("./modules/math.js").then((module) => {
    console.log(module.add(2, 3)); // 5
  });
}

// 7. Export a class from a module.

const addition = new Operations(2, 3);
addition.add();

// 8. Export a constant from a module.

console.log(example);
