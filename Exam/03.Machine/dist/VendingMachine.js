"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.buttonCapacity > this.drinks.length) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const sortedDrinks = this.drinks.sort((a, b) => a.volume - b.volume);
        const biggestDrinkVolume = sortedDrinks[sortedDrinks.length - 1];
        return biggestDrinkVolume.toString();
    }
    getCheapest() {
        const sortedDrinks = this.drinks.sort((a, b) => a.price - b.price);
        const lowestPrice = sortedDrinks[0];
        return lowestPrice.toString();
    }
    buyDrink(name) {
        const drink = this.drinks.find(d => d.name === name);
        return drink.toString();
    }
    getCount() {
        const count = this.drinks.length;
        return count;
    }
    report() {
        const result = "Drinks available:\n";
        const reportDrinks = this.drinks.map(d => d.toString()).join("\n");
        return `${result}${reportDrinks}`;
    }
}
exports.VendingMachine = VendingMachine;
