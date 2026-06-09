function add(a: number, b: number): number {
  return a + b
}

console.log(add(2, 5))

function greets(name: string): string {
  return `Hello ${name}`
}

let newName: string = 'Swati'
console.log(newName)


class Person {
  name: string
  age: number 

  constructor(age: number, name: string) {
    this.age = age
    this.name = name
  }

  greet = (): string => {
    return `Hello ${this.name}`
  }
}

const person = new Person(30, 'Swati')
console.log(person.greet())


interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2
  }
}

const circle: Shape = new Circle(2)
console.log(circle.calculateArea())

function printType(input: number | string): void {
  if (typeof input === "string") {
    console.log('input string...', input.toUpperCase())
  } else {
    console.log('input number...', input.toFixed(2))
  }
}

printType('Swati')
printType(121321)


class Dog {
  bark(): void {
    console.log('dog sound')
  } 
}

class Cat {
  meow(): void {
    console.log('cat sound')
  }
}

function petSound(pet: Dog | Cat): void {
  if (pet instanceof Dog) {
    pet.bark()
  } else {
    pet.meow()
  }
}

petSound(new Dog)
petSound(new Cat())