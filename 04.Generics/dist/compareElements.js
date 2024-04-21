class CompareElements {
    constructor(elements) {
        this.count = 0;
        this.elements = elements;
    }
    compare(comp) {
        this.elements.forEach(el => {
            if (comp === el) {
                this.count++;
            }
        });
        return this.count;
    }
}
let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));
//# sourceMappingURL=compareElements.js.map