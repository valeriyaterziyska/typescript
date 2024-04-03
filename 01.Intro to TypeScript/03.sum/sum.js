function sum(a, b) {
    var aInput = Number(a);
    var bInput = Number(b);
    var sum = 0;
    for (var i = aInput; i <= bInput; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum('-8', '20'));
