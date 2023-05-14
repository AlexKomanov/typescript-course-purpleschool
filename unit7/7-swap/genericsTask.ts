function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
    const swapped: Record<number, string> = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            swapped[obj[key]] = key;
        }
    }
    return swapped;
}

const obj: Record<string, number> = {
    a: 1,
    b: 2
};

const swapped: Record<number, string> = swapKeysAndValues(obj);

console.log(swapped); // {1: "a", 2: "b"}
