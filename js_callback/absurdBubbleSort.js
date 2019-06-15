
////////////////////////
//  absurdBubbleSort
////////////////////////
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  let res;
  reader.question("Helloworld", function(ans){ res = ans});
  console.log(res);

  reader.question("Helloworld", 
  function(ans) {
    if (ans === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}
// Evaluate this statement:\n${el1} > ${el2}\n\nType 'yes' if true, 'no' otherwise. \n\n


// askIfGreaterThan(1,2, el => console.log(`We are amazing!! Responded with: ${el}`));


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  // console.log(i);
  // BASE CASE
  if (i == arr.length - 1) {
    // console.log("inner");
    outerBubbleSortLoop(madeAnySwaps);
    return ;
  } else {
    // RECURSIVE STEP
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
        madeAnySwaps = true;
      } else {
        console.log("hello");
      }
      i += 1;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });

  }
}

// innerBubbleSortLoop([1,3,2], 0, false, function(res){ console.log(`completed innerBSL, res: ${res}`); });


// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true); //starter
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
