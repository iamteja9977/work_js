// 8) Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two
// numbers is the largest number that divides both of them using recursion.
import readlineSync from "readline-sync"
let num1=readlineSync.questionInt("Enter the number1: ");
let num2=readlineSync.questionInt("Enter the number2: ");
//way1
// let gcd;
// for(let i=0;i<=num2 && i<=num1; ++i){
//     if(num1% i==0 && num2%i ==0){
//         gcd=i;

//     }
// }
// console.log(`GCD of ${num1} and ${num2} is : `,gcd)

//way2
// Recursive function to return gcd of a and b
function gcd(a, b)
{
    // Everything divides 0
    if (a == 0)
    return b;
    if (b == 0)
    return a;
 
    // base case
    if (a == b)
        return a;
 
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
console.log(`GCD of ${num1} and ${num2} is : `, gcd(num1,num2));