function sum(input: number[], inversed?: boolean): number {
  let sumNums: number = 0;

  input.forEach((num) => {
    if (inversed) {
      sumNums += 1 / num;
    } else {
      sumNums += num;
    }
  });

  return sumNums;
}

function concatNums(input: number[]): string {
  return input.join("");
}

function solve(input: number[]) {
  console.log(sum(input));
  console.log(sum(input, true));
  console.log(concatNums(input));
}

solve([1, 2, 3]);
