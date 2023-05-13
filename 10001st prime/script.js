// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number? //2

let arrayPrint=[]



function isSimple(num){
    if (num %2===0){
        return num ===2
    }
    let d = 3
    while (d *d <=num && num %d !==0){
        d+=2
    }
    return d*d > num
}
let i = 1
while (arrayPrint.length < 10002){
    if (isSimple(i)){
        arrayPrint.push(i)
    }
    i++
}

console.log(arrayPrint[arrayPrint.length-1]) //104743 





