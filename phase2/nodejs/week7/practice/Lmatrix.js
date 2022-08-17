//  import { matrix,PrintMatrix } from "./matrices.js";
import readlineSync from "readline-sync";
function CheckMatrix(){
let R = readlineSync.questionInt("enter Rows:")
let C = readlineSync.questionInt("enter Cols:")
console.log(`given CheckMatrix is in ${R} * ${C}`)

let newMatrix = new Array(R)
for(let i=0;i<newMatrix.length;i++){
    newMatrix[i] = new Array(C)
}
//user input
for(let i=0;i<newMatrix.length;i++){
    for(let j=0;j<C;j++){
        newMatrix[i][j] = readlineSync.questionInt(`enter element of ${i},${j}:`)
    }
}
console.log(newMatrix)
return newMatrix;
}
//task1
let mat = CheckMatrix()
function Check(newMatrix){
 let N= []
let P= []
for(let i=0;i<newMatrix.length;i++){
for(let j=0;j<newMatrix[0].length;j++){
    if(newMatrix[i][j]>0){
        P.push(newMatrix[i][j])
    }
    else{
        N.push(newMatrix[i][j])
    }
}
}
console.log(`Negative values are:- ${N}\nPositive values are:- ${P}`)
}
Check(mat)
//task2
function Prime(newMatrix){
    // console.log(newMatrix)
    for(let i=0;i<newMatrix.length;i++){
        for(let j=0;j<newMatrix[0].length;j++){
        const number = newMatrix[i][j];
        let isPrime = true;
        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        }
        else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(`${number} is a prime number`);
            } else {
                console.log(`${number} is a not prime number`);
            }
        }
        
        }
    }
}
   Prime(mat)
// //task3
// function Armstrong(newMatrix){
//     for(let i=0;i<newMatrix.length;i++){
//      for(let j=0;j<newMatrix[0].length;j++){
//         var a = newMatrix[i][j];
//         // console.log(a)
//         var b = a.toString()
//         // console.log(b,typeof(b))
//         let sum = 0  
//         for(i=0;i<b.length;i++){
//        let  temp= Math.pow(b[i],b.length)
//         sum+=temp
//         // console.log(sum)
//         }
//         console.log(sum)
//         if(a==sum){
            
//             console.log( "it is a armstrong number \n")
//         }
//         else {
            
//             console.log("\nit is not a armstrong number\n")
//         }
//       }
//     }
// }
// Armstrong(mat)