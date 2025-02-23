// 1. Add a method to the Array prototype to calculate the sum of all elements.

Array.prototype.calculateSum = function (cb) {
  const sum = this.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  cb(sum);
};

[1, 2, 3].calculateSum((sum) => console.log(sum));

// 2. Add a method to the String prototype to reverse a string.

String.prototype.reverseString = function () {
  return this.split("").reverse().join("");
};

console.log("hello".reverseString());

// 4. Create a constructor function and add a method to its prototype.

function Example() {
  this.test = () => console.log("test");
}

const example = new Example();
const example2 = new Example();

Example.prototype.addAnother = function () {
  console.log("another test");
};
example.test();
example.addAnother(); // The prototype is an object that is shared by all instances created by the constructor function.s
example2.addAnother();

// 5. Use Object.create to create an object with a specific prototype.

const greet = Object.create({
  helloWorld: () => console.log("hello world"),
});
greet.helloWorld();
console.log(Object.getPrototypeOf(greet));

// 6. Check if an object has a specific property using hasOwnProperty.

const obj = { a: 1 };
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("b")); // false

// 7. Use Object.getPrototypeOf to get the prototype of an object.

function NewExample(name = "Default") {
  this.name = name;
  this.greet = () => {
    console.log(`Hello ${name}`);
  };
}

const person = new NewExample("Nevena");
console.log(Object.getPrototypeOf(NewExample));
console.log(Object.getPrototypeOf(person));

// 8. Use Object.setPrototypeOf to set the prototype of an object.

const parent = { greet: () => "Hello!" };
const child = {};
Object.setPrototypeOf(child, parent);
console.log(child.greet()); // "Hello!"

// 9. Create an object without a prototype using Object.create(null).

const withoutPrototype = Object.create(null);
console.log(Object.getPrototypeOf(withoutPrototype));

// 10. Use instanceof to check if an object is an instance of a constructor.

const anotherExample = new NewExample("Test");
console.log(anotherExample instanceof NewExample);

// 11. Use constructor property to check the constructor of an object.

console.log(anotherExample.constructor === NewExample);
