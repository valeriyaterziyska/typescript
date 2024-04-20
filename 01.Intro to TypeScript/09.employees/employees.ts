function output(name: string): string {
  let personalNumber: number = name.length;

  return `Name: ${name} -- Personal Number: ${personalNumber}`;
}

function solve(input: string[]) {
  input.forEach((name) => {
    console.log(output(name));
  });
}

solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
