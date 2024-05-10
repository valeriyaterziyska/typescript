function cityTaxes(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;
    city.collectTaxes = () => {
        return (city.treasury += city.population * city.taxRate);
    };
    city.applyGrowth = (input) => {
        return Math.floor(city.population += city.population * input / 100);
    };
    city.applyRecession = (input) => {
        return Math.floor(city.treasury -= city.treasury * input / 100);
    };
    return city;
}
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
