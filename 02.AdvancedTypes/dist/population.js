function townPopulation(input) {
    const towns = [];
    input.forEach((town) => {
        const [name, populationInput] = town.split(" <-> ");
        const population = Number(populationInput);
        let result = towns.find((el) => el.name === name);
        if (!!result) {
            result.population += population;
        }
        else {
            towns.push({ name, population });
        }
    });
    console.log(towns);
}
townPopulation([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
