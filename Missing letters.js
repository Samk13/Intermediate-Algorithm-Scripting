// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    for (let i = 0 ; i< str.length; i++) {
        let code = str.charCodeAt(i);
        if(code!==str.charCodeAt(0) +i){
            return String.fromCharCode(code -1);
        }

    }

    return undefined;
  }
  


  console.log(
  
  fearNotLetter("abce")
  );