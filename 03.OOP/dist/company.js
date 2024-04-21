class Employee {
    constructor(name, salary, position, deparment, email, age) {
        name = this.name;
        salary = this.salary;
        position = this.position;
        deparment = this.deparment;
        email = this.email;
        age = this.age;
    }
}
function companyCalc(list) {
    const users = [];
    list.forEach(user => {
        const [name, salary, position, deparment, email, age] = user.split(" ");
    });
}
companyCalc([
    "Peter 120.00 Dev Development peter@abv.bg 28",
    "Tina 333.33 Manager Marketing 33",
    "Sam 840.20 ProjectLeader Development sam@sam.com",
    "George 0.20 Freeloader Nowhere 18"
]);
