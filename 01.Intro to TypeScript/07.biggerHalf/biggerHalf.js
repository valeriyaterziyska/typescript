function biggerHalf(input) {
    return input.sort(function (a, b) { return a - b; })
        .slice(input.length / 2);
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
