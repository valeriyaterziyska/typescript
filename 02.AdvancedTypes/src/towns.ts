type Town = {
  town: string;
  latitude: string;
  longtitude: string;
};

function towns(input: string[]): Town[] {
  const towns: Town[] = [];

  input.forEach((currentTown) => {
    let [town, latitudeInput, longtitudeInput] = currentTown.split(" | ");
    const latitude: string = Number(latitudeInput).toFixed(2);
    const longtitude: string = Number(longtitudeInput).toFixed(2);

    const townObj: Town = { town, latitude, longtitude };
    towns.push(townObj);
  });

  return towns;
}

console.log(
  towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"])
);
