// interface Hero {
//     Hero: string,
//     level: string,
//     items: string,
// }
const heroesArr = [];
function heroes(input) {
    input.forEach((hero) => {
        let [name, level, items] = hero.split(" / ");
        let currentObj = { "Hero": name, "level": level, "items": items };
        heroesArr.push(currentObj);
    });
    let sortedObj = heroesArr.sort((a, b) => a.level - b.level);
    console.log(heroesArr);
}
heroes([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
