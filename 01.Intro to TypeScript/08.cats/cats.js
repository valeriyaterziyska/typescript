var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.meow = function () {
        console.log("".concat(this.name, ", age ").concat(this.age, " says Meow"));
    };
    return Cat;
}());
function solve(input) {
    input.forEach(function (cat) {
        var _a = cat.split(" "), name = _a[0], age = _a[1];
        var currentCat = new Cat(name, age);
        currentCat.meow();
    });
}
solve(["Mellow 2", "Tom 5"]);
