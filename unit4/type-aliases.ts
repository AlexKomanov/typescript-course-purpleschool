type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    name: string,
    role: string
}

type UserWithRole = User & Role;

type RoledUser = {
    user: User,
    role: Role
}

let user: UserWithRole = {
    role: "admin",
    age: 34,
    name: "Alex",
    skills: ['1', '2']
}

let anotherUser: RoledUser = {
    user : {
        name: "alex", 
        age: 34, 
        skills: ['a', 'b']
    },
    role: {
        name: 'role-name',
        role: 'admin'
    }
}