const food = {};
function solve(input) {
    for (let i = 0; i < input.length; i += 2) {
        // console.log(input[i], i++);
        food[input[i]] = input[i + 1];
        // console.log(input[i++]);
    }
    console.log(food);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
