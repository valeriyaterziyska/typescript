function towns(input) {
    const towns = [];
    input.forEach((currentTown) => {
        let [town, latitudeInput, longtitudeInput] = currentTown.split(" | ");
        const latitude = Number(latitudeInput).toFixed(2);
        const longtitude = Number(longtitudeInput).toFixed(2);
        const townObj = { town, latitude, longtitude };
        towns.push(townObj);
    });
    return towns;
}
console.log(towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]));
