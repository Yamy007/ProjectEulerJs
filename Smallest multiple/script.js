// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let result = 0;
let num = 10;


function divided(num){
    for (let i=1; i < 20; i++){
        if (num % i !== 0 ){
            return false
        }
    }
    result = num
    return true
}
for (let i=2520; i < 500000000; i++){
    
    if (divided(i)){
        result = i
        break
    }
}


console.log(result) //232792560 