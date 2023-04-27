class TestUser {
    skills: string[];

    addSkills(skill: string): void;
    addSkills(skills: string[]): void;
    addSkills(skillsOrString: string | string[]) : void {
        if (typeof skillsOrString == "string") {
            this.skills.push(skillsOrString)
        }
        else {
            this.skills.concat(skillsOrString)
        }
    }
}

new TestUser().addSkills("skills")

function run(distance: number) : number;
function run(distance: string) : string;
function run(distance: number | string): number | string {
    if (typeof distance == 'number') {
        return 1;
    }
    else {
        return '';
    }
}

run(1200);


