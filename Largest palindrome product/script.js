// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  function largestPalindrome() {
    let max = 0;
    for (let i = 999; i >= 100; i--) {
      for (let j = i; j >= 100; j--) {
        let product = i * j;
        if (product > max && isPalindrome(product)) {
          max = product;
        }
      }
    }
    return max;
  }
  
  console.log(largestPalindrome()); // 906609
  