const logId = (id: string | number | boolean) => {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number') {
        console.log(id.toFixed())
    }
    else {
        console.log(id);

    }
}

const logErrors = (err: string | string[]) => {
    if (Array.isArray(err)) {
        console.log(err.length)
    }
    else {
        err.toLowerCase();
    }
}

const logObjects = (obj: { a: number } | { b: number }) => {
    if ('a' in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
}