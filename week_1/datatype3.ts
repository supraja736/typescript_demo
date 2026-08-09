let customerName: string ="Supraja";
let Age: number = 20;
let eligibleForAdultMovie: boolean = Age >= 18;

console.log(`Customer: ${customerName}`);
console.log(`Age: ${Age}`);
console.log(`Eligible: ${eligibleForAdultMovie}`);

if (eligibleForAdultMovie) {
    console.log(`${customerName} can watch the movie.`);
} else {
    console.log(`${customerName} is not allowed to watch the movie.`);
}