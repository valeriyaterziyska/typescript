function printSum(start: number, end: number): void {
  let sum: number = 0;
  let output: string = "";

  for (let i = start; i <= end; i++) {
    output += `${i} `;
    sum += i;
  }

  console.log(output.trim());
  console.log(`Sum: ${sum}`);
}

printSum(5, 10);
