export class Student {
    constructor(
        public name: string,
        public rollNo: number,
        public course: string
    ) {}

    display(): void {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);
    }
}