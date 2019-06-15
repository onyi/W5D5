// //////////////////////
//  Clock
// //////////////////////

// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     this.d = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.updateTime();
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.  
//   }

//   printTime() {
//     this.updateTime();
//     console.log(`${this.h}:${this.m}:${this.s}`);
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     let that = this;
//     setInterval(function(){
//       that.d = new Date();
//       that.printTime();
//     },1000)
//     // 2. Call printTime.
//   }

//   updateTime(){
//     this.s = this.d.getSeconds();
//     this.m = this.d.getMinutes();
//     this.h = this.d.getHours();
//   }
// }

// const clock = new Clock();
// // clock.printTime();
// clock._tick();






// //////////////////////
//  addNumbers
// //////////////////////


// const readline = require("readline");
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // reader.question("Enter a number: \n", function(res1) {
// //   addNumbers(res1, , completionCallback);
// //   // reader.close();
// // });

// function addNumbers(sum, numsLeft, completionCallback) {
//   console.log(`numsLeft: ${numsLeft}`);
//   if (numsLeft === 0) {
//     completionCallback(sum);
//     reader.close();
//   }
  
//   if (numsLeft > 0) {
//     reader.question("Enter a number: \n", function(res2) {
//       let num = parseInt(res2);
//       sum += num;
//       console.log(`Current sum: ${sum}`);
//       addNumbers(sum, (numsLeft - 1), completionCallback);
//     });
//   }
// }

// addNumbers(0, 3, sum => console.log(`Total sum: ${sum}`));

// // console.log("\n\nlast line\n\n");






