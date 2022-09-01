// 5) Write a program to find remainder of two numbers without using modulus (%) operator
import readlineSync from "readline-sync"
let num1=readlineSync.questionInt("Enter the divident : ");
let num2=readlineSync.questionInt("Enter the divisor : ");
let remainder;
while(num1>=num2){
    num1=num1-num2;
}
remainder=num1
console.log(`remainder is :`,remainder)

// way2
// (num - divisor * (num / divisor))