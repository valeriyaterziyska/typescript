class Cat {
  name: string;
  age: number | string;

  constructor(name: string, age: number | string) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

function solve(input: string[]) {
  input.forEach((cat) => {
    const [name, age] = cat.split(" ");

    const currentCat = new Cat(name, age);
    currentCat.meow();
  });
}

solve(["Mellow 2", "Tom 5"]);
