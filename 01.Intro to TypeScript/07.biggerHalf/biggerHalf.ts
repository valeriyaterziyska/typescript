function biggerHalf(input: number[]) {
    return input.sort((a:number,b:number) => a - b)
                .slice(input.length / 2); 
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));