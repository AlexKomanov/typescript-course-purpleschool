class TestUser {
    skills: string[] = [];

    addSkills(skill: string): void;
    addSkills(skills: string[]): void;
    addSkills(skillOrSkills: string | string[]) : void {
        if (typeof skillOrSkills == "string") {
            this.skills.push(skillOrSkills)
        }
        else {
            this.skills.push(...skillOrSkills)
        }
    }
}

const myUser = new TestUser();
myUser.addSkills(['python', 'java']);
myUser.addSkills('typescript');
console.log(myUser.skills)

function run(distance: number) : number;
function run(distance: string) : string;
function run(distance: number | string): number | string {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '1';
    }
}

run(1200);
run('1200 km')


