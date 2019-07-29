//Starts a new timer. 
//Call console.timeEnd([label]) to stop the timer and print the elapsed time to the Console.
//console.clear();
console.time('Count to 1 million');
for (var i = 0; i < 1000000; i++) {
  let square = i ** 2;
}
console.timeEnd('Count to 1 million');