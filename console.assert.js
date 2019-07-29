//Writes an error to the console when expression evaluates to false.
//console.clear();
let x = 5;
let y = 3;
const reason = 'x is expected to be less than y';
console.assert(x < y, {x, y, reason});