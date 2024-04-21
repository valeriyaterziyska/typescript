class Car {
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    get brandField() {
        return this.brand;
    }
    set brandField(brand) {
        this.brand = brand;
    }
    get modelField() {
        return this.model;
    }
    set modelField(model) {
        this.model = model;
    }
    get horsePowerField() {
        return this.horsePower;
    }
    set horsePowerField(horsePower) {
        this.horsePower = horsePower;
    }
    carInfo() {
        console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`);
    }
}
function myCarFn(input) {
    const [brand, model, horsePowerInput] = input.split(" ");
    const horsePower = Number(horsePowerInput);
    const myCar = new Car(brand, model, horsePower);
    myCar.carInfo();
}
myCarFn('Chevrolet Impala 390');
