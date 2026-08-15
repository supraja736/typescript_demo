interface Person {
    name: string;
}

function printName<T extends Person>(obj: T): void {
    console.log("Name:", obj.name);
}
printName({ name: "Supraja", age: 20 });

printName({ name: "Swathi" });