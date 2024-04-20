function sum(input, inversed) {
    var sumNums = 0;
    input.forEach(function (num) {
        if (inversed) {
            sumNums += 1 / num;
        }
        else {
            sumNums += num;
        }
    });
    return sumNums;
}
function concatNums(input) {
    return input.join("");
}
function solve(input) {
    console.log(sum(input));
    console.log(sum(input, true));
    console.log(concatNums(input));
}
solve([1, 2, 3]);
