// 1. Create a Map and add key-value pairs.

const map = new Map();

map.set("a", 1);
map.set("b", 2);

console.log(map.get(a));

// 2. Iterate over a Map using for...of.

const map2 = new Map([
  ["a", 1],
  ["b", 2],
]);
for (let [key, value] of map2) {
  console.log(key, value); // "a 1", "b 2"
}

//3. Convert a Map to an array of key-value pairs.

const map3 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log([...map3]); // [["a", 1], ["b", 2]]

//4. Create a Set and add values.

const set = new Set();
set.add(2);
set.add(3);
console.log(set.has(1));

//5. Iterate over a Set using for...of.

const set2 = new Set([1, 2, 3]);
for (let value of set2) {
  console.log(value); // 1, 2, 3
}

// 6. Convert a Set to an array.

const set3 = new Set([1, 2, 3]);
console.log([...set3]); // [1, 2, 3]

// 7. Remove duplicates from an array using a Set.

const arr = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

// 8. Delete a key-value pair from a Map.

const map4 = new Map([
  ["a", 1],
  ["b", 2],
]);
map4.delete("a");
console.log(map4s.has("a")); // false
