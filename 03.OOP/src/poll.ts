class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    personInfo() {
        return `${this.name} is ${this.age} years old.`
    }
}

function personalInfo(input: string) {
    const [name, ageInput] = input.split(' ');
    const age: number = Number(ageInput);
    
    const person = new Person(name, age);
    console.log(person.personInfo());
}

personalInfo("Peter 12");