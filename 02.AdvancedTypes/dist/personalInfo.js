const person = {
    firstName: '',
    lastName: '',
    age: '',
};
function personalInfo(firstName, lastName, age) {
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}
console.log(personalInfo("Peter", "Pan", "20"));
