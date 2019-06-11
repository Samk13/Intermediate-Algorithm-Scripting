
// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.


function sumAll(arr) {
   let start = Math.min(arr[0], arr[1]);
   let end = Math.max(arr[0],arr[1]);
   console.log(start,end);
   let result = 0;
   for ( let i = start; i <= end ; i++){
    result += i;
   }
   return result;
   

  }
  


console.log( 
//sumAll([5, 10])

//sumAll([1, 4]) //should return a number.
//sumAll([1, 4]) ///should return 10.
//sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
//sumAll([10, 5]) //should return 45.
  );

