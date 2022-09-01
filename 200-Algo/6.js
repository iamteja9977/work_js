// 6) Write a program to generate Prime Numbers less than N 
import readlineSync from "readline-sync"
// let num=readlineSync.questionInt("Enter the number : ");

// function isprime(n){
// let flag=true;//flag
// if (n<= 1) {
//     // console.log("1 is neither prime nor composite number.");   
// return false;     
// }
// if (n > 1) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) 
//         {//not to be multiple of any number
//             flag = false;
//             return false; //if u want to comment this line
//             // break;     //uncomment this line
//         }
//     }
//     return true;          //return flag;
// }
// }

// var Array=[]
//  function printPrime(num){
//     for(let i=2;i<num ;i++){
//         if(isprime(i)){
//            Array.push(i)
//         }
//     }
//     console.log(`prime numbers less than ${num} is `, Array);
// }
// printPrime(num);

// program to print prime numbers between the two numbers

// take input from the user
const lowerNumber = readlineSync.questionInt("Enter the Lowernumber : ");
const higherNumber = readlineSync.questionInt("Enter the Highernumber : ");


console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

