// 1. Create a WeakMap and add key-value pairs.

const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 1);
console.log(weakMap.get(key)); // 1

// 2. Check if a WeakMap contains a specific key.

const weakMap2 = new WeakMap();
const key2 = {};
weakMap.set(key2, 1);
console.log(weakMap2.has(key2)); // true

// 3. Delete a key-value pair from a WeakMap.

const weakMap3 = new WeakMap();
const key3 = {};
weakMap.set(key3, 1);
weakMap.delete(key3);
console.log(weakMap3.has(key3)); // false

// 4. Create a WeakSet and add values.

const weakSet4 = new WeakSet();
const obj4 = {};
weakSet.add(obj4);
console.log(weakSet4.has(obj4)); // true

// 5. Check if a WeakSet contains a specific value.

const weakSet5 = new WeakSet();
const obj5 = {};
weakSet.add(obj5);
console.log(weakSet5.has(obj5)); // true

// 6. Delete a value from a WeakSet.

const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
weakSet.delete(obj);
console.log(weakSet.has(obj)); // false

// 7. Use a WeakMap to store private data.

const privateData = new WeakMap();
class Person {
  constructor(name) {
    privateData.set(this, { name });
  }
  getName() {
    return privateData.get(this).name;
  }
}
const person = new Person("John");
console.log(person.getName()); // "John"

// 8. Use a WeakSet to track unique objects.

const weakSet8 = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet8.has(obj1)); // true

/* 9.
Explain the difference between Map and WeakMap.

Map: Keys can be of any type, and the keys are strongly referenced.

WeakMap: Keys must be objects, and the keys are weakly referenced (can be garbage collected).
 */

/* 10
Explain the difference between Set and WeakSet.

Set: Values can be of any type, and the values are strongly referenced.

WeakSet: Values must be objects, and the values are weakly referenced (can be garbage collected).
 */
