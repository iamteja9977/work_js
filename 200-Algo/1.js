// 1) Write a program to given input Check whether Even or odd.
import readlineSync from "readline-sync"
let a=readlineSync.questionInt("Enter the number : ")
if(a%2==0){
    console.log("you entered even number : ", a);
}
else{
    console.log("you entered odd number : ", a);
}