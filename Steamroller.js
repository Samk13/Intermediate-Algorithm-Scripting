// 


function steamrollArray(arr) {
    // I'm a steamroller, baby
    console.log(...arr);
    
    let flat = [].concat(...arr);
    console.log(flat);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat ;
    
  }
  



  console.log(
  
steamrollArray([1, [2], [3, [[4]]]])


// steamrollArray([[["a"]], [["b"]]])// should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
);