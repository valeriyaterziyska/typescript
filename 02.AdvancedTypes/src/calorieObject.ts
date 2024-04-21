const food = {};

function solve(input: string[]) {
  for (let i = 0; i < input.length; i += 2) {
    food[input[i]] = input[i + 1];
  }

  console.log(food);
}

solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
