type City = {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => number;
  applyGrowth: (input: number) => number;
  applyRecession: (input: number) => number;
};

function cityTaxes(name: string, population: number, treasury: number): City {
  const city = {} as City;

  city.name = name;
  city.population = population;
  city.treasury = treasury;
  city.taxRate = 10;
  city.collectTaxes = (): number => {
    return (city.treasury += city.population * city.taxRate);
  };

  city.applyGrowth = (input: number): number => {
    return Math.floor(city.population += city.population * input/100);
  }

  city.applyRecession = (input: number) : number => {
    return Math.floor(city.treasury -= city.treasury * input / 100);
  }

  return city;
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
