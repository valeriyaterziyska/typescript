function output(name) {
    var personalNumber = name.length;
    return "Name: ".concat(name, " -- Personal Number: ").concat(personalNumber);
}
function solve(input) {
    input.forEach(function (name) {
        console.log(output(name));
    });
}
solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
