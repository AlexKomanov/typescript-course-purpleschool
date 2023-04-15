function generateError(message: string): never {
    throw new Error(message);
}



function rec(): never {
    return rec();
}

type paymentAction = 'success' | 'refund' | 'reject';

const getPayment = (action: paymentAction) => {
    switch (action) {
        case "refund":
            // ....
            break;
        case "success":
            // ...
            break;
        case "reject":
            // ...
            break;
        default:
            const _name: never = action;
            throw new Error("No such action was found...")
    }
}


function isString(element: string | number) : boolean {

    if(typeof element == "string") {
        return true;
    }
    else if(typeof element == "number") {
        return false;
    }

    // calling the function of the never type
    generateError("Error message")
}






