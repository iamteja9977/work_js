// 4) Write a program to subtract two integers without using Minus (-) operator
import readlineSync from "readline-sync"
let num1=readlineSync.questionInt("Enter the number1 : ");
let num2=readlineSync.questionInt("Enter the number2 : ");
let sub=num1+(~num2)+1
console.log(`${num1}- ${num2} is  `,sub);
 