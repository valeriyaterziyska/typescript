const person = {
    firstName: '',
    lastName: '',
    age: '',
}

function personalInfo(firstName: string, lastName: string, age: string): object {
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
  return person;
}

console.log(personalInfo("Peter", "Pan", "20"));
