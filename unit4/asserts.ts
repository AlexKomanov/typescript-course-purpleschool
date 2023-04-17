interface MyUser {
    name: string;
}

const myObj = {};

assertUser(myObj);
myObj.name = "Alex";


function assertUser(obj: unknown) : asserts obj is MyUser {
    if (typeof obj === "object" && !!obj && 'name' in obj) {
        return;
    }

    throw new Error("Is not user")
}
