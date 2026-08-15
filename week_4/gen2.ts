function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

let result1 = swap<number>(10, 20);
console.log(result1);

let result2 = swap<string>("Java", "TypeScript");
console.log(result2);