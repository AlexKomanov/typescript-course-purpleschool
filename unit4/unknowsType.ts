let input: unknown;

function doSome(i: unknown) {
    if (typeof i == "number") {
        i++;
    }
    else {
        console.log(i);
    }
}

async function getData() {
    try {
        await fetch('');
    }
    catch(error) {
        // if (error instanceof Error) {
        //     console.log(error.message.toLowerCase());
        // }
        const err = error as Error;
        console.log(err.message.toString());
    }
}