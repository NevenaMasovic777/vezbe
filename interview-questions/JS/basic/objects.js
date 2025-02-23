// 1. Create an object representing a person with properties name, age, and city.

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

// 2. Add a new property

person.address = "123 Main St";

// 3. Update the age property of the person object.

person.age = 35;

// 4. Delete the city property of the person object.

delete person.city;

// 5. Check if the person object has a property name.

console.log(person.hasOwnProperty("name"));

// 6. Write a function to check if an object has a specific property.

function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

// 7. Write a function to get the values of an object as an array.

function getObjectValues(obj) {
  return Object.values(obj);
}

// 8. Write a function to convert an object to a JSON string.

function objectToJson(obj) {
  return JSON.stringify(obj);
}

// 9. Write a function to get a copy of an object.

function copyObject(obj) {
  return { ...obj };
}

// 10. Write a function to merge two objects.

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 11. Write a function to remove a property from an object.

function removeProperty(obj, property) {
  delete obj[property];
  return obj;
}

// 12. Write a function to check if an object is empty.

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// 13. Write a function to get the length of an object.

function getObjectLength(obj) {
  return Object.keys(obj).length;
}

// 14. Write a function to deep clone an object.

function deepCloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}
