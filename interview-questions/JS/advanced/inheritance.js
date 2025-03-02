// 1. Implement inheritance using ES6 classes.

class Animal {
  walk() {
    console.log("walking");
  }
}

class Cat extends Animal {
  meowing() {
    console.log("meowing");
  }
}

const cat = new Cat();

cat.meowing();
cat.walk();

// 2. Implement inheritance using constructor functions.

function Dog() {
  console.log("dog");
}

function Labrador() {
  this.napping = function () {
    console.log("napping");
  };
}
Dog.prototype.bark = function () {
  console.log("barking");
}; //appendujem na prototype
Labrador.prototype = Object.create(Dog.prototype); //dodelim prototip labradoru
Labrador.prototype.constructor = Labrador; //setujem constuktor da ne bude Dog, da se instanca pravi od labrador klase

const laba = new Labrador();
laba.napping();
laba.bark();

// 3. Implement multiple inheritance using mixins.

class CanEat {}
CanEat.prototype.eat = function () {
  console.log(`${this.name} eats.`);
};
class CanSleep {}
CanSleep.prototype.sleep = function () {
  console.log(`${this.name} sleeps.`);
};
class Animal2 {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Animal2.prototype, CanEat.prototype, CanSleep.prototype);
const animal = new Animal2("Rex");
animal.eat(); // "Rex eats."
animal.sleep(); // "Rex sleeps."

// 4. Implement inheritance using Object.create.

const animal3 = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};
const dog = Object.create(animal3, {
  name: { value: "Ari" },
  speak: {
    value() {
      console.log(`${this.name} barks.`);
    },
  },
});
dog.speak(); // "Rex barks."

// 5. Implement inheritance using class and super.

class Bird {
  constructor(name) {
    this.name = name;
  }

  sing() {
    console.log("singing", this.name);
  }
}

class Parrot extends Bird {
  constructor(name) {
    super(name);
  }

  dance() {
    console.log("dances", this.name);
  }
}

const pika = new Parrot("Pika");
pika.sing();
pika.dance();

// 6. Implement inheritance using Object.setPrototypeOf.

function Car(name) {
  this.name = name;
  this.showName = function () {
    console.log("show name", name);
  };
}
Car.prototype.model = function () {
  console.log("model");
};

function Seat() {
  this.accelerate = function () {
    console.log("accelerating");
  };
}
const car = new Car("seat ibiza");
const seat = new Seat();
Object.setPrototypeOf(seat, car);
seat.model();
seat.accelerate();

// 7. Implement inheritance using class and static methods.

class Planet {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }

  static describe() {
    console.log("This is a planet");
  }
}

const saturn = new Planet("Saturn");
saturn.showName();
Planet.describe();

// 8. Implement inheritance using class and get/set.

class Plant {
  constructor(name) {
    this.name = name;
  }
  get() {
    console.log(this.name);
  }
  set(name) {
    this.name = name;
  }
}

const sunflower = new Plant("sunflower");
sunflower.get();
sunflower.set("gold sunflower");
sunflower.get();

// 9. Implement inheritance using class and private fields.

class Flower {
  #name;
  constructor(name) {
    this.#name = name;
  }
  speak() {
    console.log(`${this.#name} makes a noise.`);
  }
}
// class Rose extends Flower {
//   speak() {
//     console.log(`${this.#name} barks.`); // Error: Private field '#name' must be declared in an enclosing class
//   }
// }

// 10. Implement inheritance using class and Symbol.

const speakSymbol = Symbol("speak");
class Human {
  constructor(name) {
    this.name = name;
  }
  [speakSymbol]() {
    console.log(`${this.name} makes a noise.`);
  }
}
class Boy extends Human {
  constructor(name) {
    super(name);
  }
  [speakSymbol]() {
    console.log(`${this.name} laughs.`);
  }
}
const ben = new Boy("Ben");
ben[speakSymbol]();
