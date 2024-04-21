class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
function personalInfo(input) {
    const [name, ageInput] = input.split(' ');
    const age = Number(ageInput);
    const person = new Person(name, age);
    console.log(person.personInfo());
}
personalInfo("Peter 12");
