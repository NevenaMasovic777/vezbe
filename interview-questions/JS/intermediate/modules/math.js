// math.js
export function add(a, b) {
  return a + b;
}
export function reduce(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

export class Operations {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  reduce() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    return this.a / this.b;
  }
}

export const example = "Example";
