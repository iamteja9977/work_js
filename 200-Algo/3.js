// 3) Write a program to decide given N is Prime or not.
import readlineSync from "readline-sync"
let num=readlineSync.questionInt("Enter the number : ");

 let flag=true;//flg

if (num === 1) {
    console.log("1 is neither prime nor composite number.");   
     }

else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) 
        {//not to be multiple of any number
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(`${num}  is prime`)
        }
    else{
        console.log(`${num}   is not  prime`)
        }
     }
else{
 console.log("enetered num is less than 1")
    }

    




