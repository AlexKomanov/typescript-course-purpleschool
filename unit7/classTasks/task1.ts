const transferToString = <T>(data: T): string | undefined => {

    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {

        case "string":
            return data;
        case "bigint":
        case "boolean":
        case 'number':
        case "symbol":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data);
        default:
            return undefined;

    }
}

console.log(transferToString("text"));
console.log(transferToString({a: 5, b: "value"}));
console.log(transferToString([1, 4, 6]));
console.log(transferToString(true));
