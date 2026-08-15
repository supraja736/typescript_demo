namespace StudentInfo {

    export class Student {

        constructor(
            public name: string,
            public roll: number
        ) {}

        display(): void {
            console.log("Name:", this.name);
            console.log("Roll:", this.roll);
        }
    }
}

const s = new StudentInfo.Student("Supraja", 4242);
s.display();