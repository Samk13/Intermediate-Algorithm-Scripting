// Pig Latin
// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {

    let voyell = /[eauoi]/gi;
    if(voyell.test([str[0]])) {
        str += 'way';
    } else if (str.match(voyell)){
        str = str.slice(str.search(voyell)) + str.slice(0,str.search(voyell)) + 'ay';
    }
    if (!voyell.test(str)) str += 'ay';
    return str;

  }
  





  console.log('-------------------');
  

console.log(
  
  translatePigLatin('algorithm')
);
  console.log('-------------------');
