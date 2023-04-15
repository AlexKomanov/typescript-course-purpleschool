interface UserInterface extends RoleID{
    name: string,
    age: number,
    skills: string[]
}

interface RoleID {
    roleId: number
}

let user1 : UserInterface = {
    name: 'alex',
    age: 33,
    skills: ['', ''],
    roleId: 123
}

interface UserDictionary {
    [index: number]: UserInterface,
}
