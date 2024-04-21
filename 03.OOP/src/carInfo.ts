class Car {
  brand: string;
  model: string;
  horsePower: number;

  constructor(brand: string, model: string, horsePower: number) {
    this.brand = brand;
    this.model = model;
    this.horsePower = horsePower;
  }

  get brandField(): string {
    return this.brand;
  }
  set brandField(brand: string) {
    this.brand = brand;
  }

  get modelField(): string {
    return this.model;
  }

  set modelField(model: string) {
    this.model = model;
  }

  get horsePowerField(): number {
    return this.horsePower;
  }

  set horsePowerField(horsePower: number) {
    this.horsePower = horsePower;
  }

  carInfo() {
    console.log(`The car is: ${this.brand} ${this.model} - ${this.horsePower} HP.`);
    
  }
}

function myCarFn(input: string) {
    const [brand, model, horsePowerInput] = input.split(" ");
    const horsePower = Number(horsePowerInput);

    const myCar = new Car(brand, model,horsePower);
    myCar.carInfo();
}

myCarFn('Chevrolet Impala 390');

