function evenElement(inputArr: string[]) {
    let evenElements: string[] = [];

    for (let i = 0; i < inputArr.length; i += 2) {
        evenElements.push(inputArr[i]);
    }

    return evenElements;
}

console.log(evenElement(['20', '30']))