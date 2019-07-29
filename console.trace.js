//Prints a stack trace to the Console.
//console.clear();
let first = () => { second(); };
let second = () => { third(); };
let third = () => { fourth(); };
let fourth = () => { console.trace(); };
first();