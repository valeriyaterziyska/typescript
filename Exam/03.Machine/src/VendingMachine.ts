import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.buttonCapacity > this.drinks.length) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((d) => d.name === name);
    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    const sortedDrinks = this.drinks.sort((a, b) => a.volume - b.volume);
    const biggestDrinkVolume = sortedDrinks[sortedDrinks.length - 1];

    return biggestDrinkVolume.toString();
  }

  getCheapest(): string {
    const sortedDrinks = this.drinks.sort((a, b) => a.price - b.price);
    const lowestPrice = sortedDrinks[0];

    return lowestPrice.toString();
  }

  buyDrink(name: string): string {
    const drink = this.drinks.find(d => d.name === name);

    return drink.toString();
  }

  getCount(): number {
    const count = this.drinks.length;
    return count;
  }

  report(): string {
    const result: string = "Drinks available:\n";

    const reportDrinks: string = this.drinks.map(d => d.toString()).join("\n");
    
    return `${result}${reportDrinks}`;
  }
}
