// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function findPrimeFactors(num) {
    let primeFactors = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        primeFactors.push(i);
        num /= i;
      }
    }
    return primeFactors;
  }
  

  
function isSimple (num){
    if (num <= 2){
        return false
    }
    for (let i=2; i < num; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

let result = findPrimeFactors(600851475143);
console.log(result[result.length - 1]); //6857


