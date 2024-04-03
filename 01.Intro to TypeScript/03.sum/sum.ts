function sum(a: string, b: string) {
    let aInput = Number(a);
    let bInput = Number(b);
    let sum: number = 0;

    for (let i = aInput; i <= bInput; i++) {
        sum += i;
    }

    return sum;
}

console.log(sum('-8', '20'));