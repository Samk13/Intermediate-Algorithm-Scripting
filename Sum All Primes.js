// Intermediate Algorithm Scripting: Sum All Primes
// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


function sumPrimes(num) {
    console.log(num);
    
    let arr = Array.from({length: num+1}, (v,k) => k).slice(2);
    let onlyPrimes = arr.filter((n) => {
        let m = n-1;
        while (m>1 && m>= Math.sqrt(n)){
            if ((n % m) === 0)
            return false;
            m--;
        }
        return true;
    });
    return onlyPrimes.reduce((a,b) => a+b);
  }
  




console.log(
  
  
sumPrimes(10)

// sumPrimes(10) //should return a number.
// sumPrimes(10) //should return 17.
// sumPrimes(977)// should return 73156.

  );


