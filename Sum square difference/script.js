let arraySquares = []
let arraySumSquares = []
let sumArray = 0;

for (let i =1; i < 101; i++){
    arraySquares.push(i**2);
}

for (let i = 1; i< 101; i++ ){
    arraySumSquares.push(i);
}


function findSum(arr){
    let result = 0;  
    for (const i of arr){
        console.log(i);
        result += i;
    }
    return result
}

console.log((findSum(arraySumSquares)**2) - findSum(arraySquares)) //25164150












