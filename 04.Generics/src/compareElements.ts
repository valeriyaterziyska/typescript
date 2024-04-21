class CompareElements<T> {
    elements: T[];
    protected count: number = 0;
    
    constructor(elements: T[]) {
        this.elements = elements;
    }

    compare(comp: unknown): number {
        this.elements.forEach(el => {
            if(comp === el) {
                this.count++;
            }
        })
        return this.count;
    }
}

let c = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c.compare(1));
