function largestNum(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
    ;
}
console.log(largestNum(-3, -5, -22.5));
