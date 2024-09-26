interface Iperson {
  name: string
  age: number
  greet(): void
}

class Person implements Iperson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
  }
}

const hister = new Person('shakeAndBake', 100)
hister.greet()
