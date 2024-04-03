const mathFunc = {
    '+': function (a: number, b: number) { return a + b },
    '-': function (a: number, b: number) { return a - b },
    '/': function (a: number, b: number) { return a / b },
    '*': function (a: number, b: number) { return a * b },

}


function math(a: number, b: number, symbol: string) {


    return mathFunc[symbol](a, b);
}

console.log(math(5, 6, '+'));