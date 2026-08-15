let value: string | number;

value = "TypeScript";
console.log(value);

value = 100;
console.log(value);

function display<T>(data: T): void {
    console.log("Value:", data);
}

display<string>("Hello");
display<number>(500);