function printSum(start, end) {
    let sum = 0;
    let output = "";
    for (let i = start; i <= end; i++) {
        output += `${i} `;
        sum += i;
    }
    console.log(output.trim());
    console.log(`Sum: ${sum}`);
}
printSum(5, 10);
