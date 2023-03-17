interface ParticularUser {
    username: string;
    password?: {
        type: 'short' | 'long',
        admin: 'yes' | 'no'
    }
}

const user3: ParticularUser = {
    username: 'username'
}

const testUser = (user: ParticularUser) => {
    const myUser = user.password?.type;

    const anotherUser = user.password!.admin; // <- forcible usage of optional parameter
}

const test = (param?: string) => {
    const t = param ?? Math.random();
}